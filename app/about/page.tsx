import { cosmic, hasStatus } from '@/lib/cosmic'
import { Page } from '@/types'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Digital Agency',
  description: 'Learn about our digital agency team, mission, and proven track record of delivering results for clients.',
}

async function getAboutPageData() {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'pages', slug: 'about-us' })
      .props(['id', 'title', 'slug', 'metadata'])
    
    return response.object as Page
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw error
  }
}

export default async function AboutPage() {
  const page = await getAboutPageData()

  return (
    <main>
      <Header />
      <div className="section-padding bg-gray-50">
        <div className="container-max">
          {page?.metadata?.hero_image && (
            <div className="mb-12">
              <img 
                src={`${page.metadata.hero_image.imgix_url}?w=1200&h=400&fit=crop&auto=format,compress`}
                alt={page.metadata.page_title || 'About Us'}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl"
                width={1200}
                height={400}
              />
            </div>
          )}
          
          <div className="max-w-4xl mx-auto">
            {page?.metadata?.content ? (
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: page.metadata.content }}
              />
            ) : (
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-8">About Our Digital Agency</h1>
                <div className="prose prose-lg max-w-none">
                  <p>We're a passionate team of designers, developers, and strategists who believe in the power of great digital experiences.</p>
                  <p>Founded in 2018, we've helped over 200 companies transform their online presence and achieve measurable growth.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}