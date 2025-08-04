import { cosmic, hasStatus } from '@/lib/cosmic'
import { Page } from '@/types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Digital Agency',
  description: 'Get in touch with our digital agency team. Contact us for web development, design, and marketing services.',
}

async function getContactPageData() {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'pages', slug: 'contact' })
      .props(['id', 'title', 'slug', 'metadata'])
    
    return response.object as Page
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw error
  }
}

export default async function ContactPage() {
  const page = await getContactPageData()

  return (
    <main>
      <Header />
      <div className="section-padding bg-gray-50">
        <div className="container-max">
          {page?.metadata?.hero_image && (
            <div className="mb-12">
              <img 
                src={`${page.metadata.hero_image.imgix_url}?w=1200&h=400&fit=crop&auto=format,compress`}
                alt={page.metadata.page_title || 'Contact'}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl"
                width={1200}
                height={400}
              />
            </div>
          )}
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              {page?.metadata?.content ? (
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: page.metadata.content }}
                />
              ) : (
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Ready to start your next project? We'd love to hear about your goals and discuss how we can help you achieve them.
                  </p>
                  
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
                    <div className="space-y-4">
                      <p><strong>Email:</strong> hello@agency.com</p>
                      <p><strong>Phone:</strong> (555) 123-4567</p>
                      <p><strong>Address:</strong> 123 Digital Street, Tech City, TC 12345</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}