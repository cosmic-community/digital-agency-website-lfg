import { Service } from '@/types'
import { ArrowRight } from 'lucide-react'

interface ServicesProps {
  services: Service[]
}

export default function Services({ services }: ServicesProps) {
  if (!services || services.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              {service.metadata?.service_icon && (
                <div className="mb-6">
                  <img 
                    src={`${service.metadata.service_icon.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={service.metadata.service_name || service.title}
                    className="w-16 h-16 object-cover rounded-lg"
                    width={64}
                    height={64}
                  />
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.metadata?.service_name || service.title}
              </h3>
              
              {service.metadata?.description && (
                <div 
                  className="text-gray-600 mb-6 prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: service.metadata.description }}
                />
              )}
              
              {service.metadata?.starting_price && (
                <div className="mb-6">
                  <span className="text-2xl font-bold text-primary-600">
                    {service.metadata.starting_price}
                  </span>
                </div>
              )}
              
              {service.metadata?.key_features && service.metadata.key_features.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {service.metadata.key_features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <ArrowRight className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}