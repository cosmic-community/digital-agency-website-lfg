import { CaseStudy } from '@/types'
import { ArrowRight } from 'lucide-react'

interface CaseStudiesProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudies({ caseStudies }: CaseStudiesProps) {
  if (!caseStudies || caseStudies.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {caseStudy.metadata?.featured_image && (
                <div className="h-64 overflow-hidden">
                  <img 
                    src={`${caseStudy.metadata.featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
                    alt={caseStudy.metadata.project_title || caseStudy.title}
                    className="w-full h-full object-cover"
                    width={400}
                    height={300}
                  />
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {caseStudy.metadata?.project_title || caseStudy.title}
                  </h3>
                  {caseStudy.metadata?.client_name && (
                    <span className="text-primary-600 font-medium">
                      {caseStudy.metadata.client_name}
                    </span>
                  )}
                </div>
                
                {caseStudy.metadata?.project_overview && (
                  <div 
                    className="text-gray-600 mb-6 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: caseStudy.metadata.project_overview }}
                  />
                )}
                
                {caseStudy.metadata?.results && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                    <div 
                      className="text-gray-600 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: caseStudy.metadata.results }}
                    />
                  </div>
                )}
                
                {caseStudy.metadata?.services_used && caseStudy.metadata.services_used.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseStudy.metadata.services_used.map((service) => (
                      <span 
                        key={service.id}
                        className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {service.metadata?.service_name || service.title}
                      </span>
                    ))}
                  </div>
                )}
                
                <button className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors">
                  View Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}