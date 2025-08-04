# Digital Agency Website

![App Preview](https://imgix.cosmicjs.com/10fd64d0-7028-11f0-a051-23c10f41277a-photo-1522071820081-009f0129c71c-1754197783246.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A professional digital agency website built with Next.js that showcases your services, team, case studies, and testimonials. Features a responsive design with a working contact form that sends emails and stores submissions in Cosmic CMS.

## Features

- 🏢 **Service Showcase** - Display services with descriptions, pricing, and key features
- 👥 **Team Profiles** - Interactive team member cards with bios and social links  
- 📂 **Case Studies** - Project portfolios with challenges, solutions, and results
- 💬 **Client Testimonials** - Customer feedback with ratings and photos
- 📧 **Contact Form** - Working contact form with email notifications via Resend
- 📱 **Responsive Design** - Optimized for all devices with Tailwind CSS
- ⚡ **Fast Performance** - Built with Next.js 15 and optimized images
- 🔍 **SEO Friendly** - Proper meta tags and structured data

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=688eede463f04a241b19c2d1&clone_repository=68905715b795cb44476e6c1b)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a digital agency company website with services, team members, testimonials, and case studies. Add contact page and form that sends an email to tony@cosmicjs.com from tony@cosmicjs.com using resend"

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **CMS**: Cosmic Headless CMS
- **Email**: Resend API for contact form notifications
- **Images**: Imgix optimization for fast loading
- **Icons**: Lucide React icons
- **TypeScript**: Full type safety with strict mode

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your content
- A Resend account for email functionality

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Add your environment variables:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   RESEND_API_KEY=your-resend-api-key
   ```

5. Run the development server:
   ```bash
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetch Services
```typescript
import { cosmic } from '@/lib/cosmic'

const services = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
```

### Fetch Team Members
```typescript
const team = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
```

### Submit Contact Form
```typescript
await cosmic.objects.insertOne({
  type: 'contact-forms',
  title: `Contact from ${formData.name}`,
  metadata: {
    name: formData.name,
    email: formData.email,
    message: formData.message
  }
})
```

## Cosmic CMS Integration

This website leverages your existing Cosmic content structure:

- **Services** - Service offerings with descriptions and pricing
- **Team Members** - Staff profiles with photos and contact info
- **Case Studies** - Project showcases with results and galleries
- **Testimonials** - Client feedback with ratings and photos
- **Pages** - Dynamic pages for About and Contact sections
- **Contact Forms** - Form submissions stored automatically

All content is fetched dynamically from Cosmic, making it easy to update your website content without touching code.

## Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy automatically on every push to main

### Netlify
1. Connect your repository to Netlify
2. Add environment variables in site settings
3. Deploy with automatic builds

Set these environment variables in your deployment platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY` 
- `COSMIC_WRITE_KEY`
- `RESEND_API_KEY`

<!-- README_END -->