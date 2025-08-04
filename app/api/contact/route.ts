import { NextRequest, NextResponse } from 'next/server'
import { cosmic } from '@/lib/cosmic'
import { resend } from '@/lib/resend'
import { ContactFormData } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json()
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Store in Cosmic
    await cosmic.objects.insertOne({
      type: 'contact-forms',
      title: `Contact from ${formData.name}`,
      metadata: {
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        service_interest: formData.service_interest || '',
        message: formData.message,
        budget_range: formData.budget_range || ''
      }
    })

    // Send email via Resend
    await resend.emails.send({
      from: 'tony@cosmicjs.com',
      to: 'tony@cosmicjs.com',
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
        ${formData.service_interest ? `<p><strong>Service Interest:</strong> ${formData.service_interest}</p>` : ''}
        ${formData.budget_range ? `<p><strong>Budget Range:</strong> ${formData.budget_range}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}