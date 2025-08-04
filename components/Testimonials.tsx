import { Testimonial } from '@/types'
import { Star } from 'lucide-react'

interface TestimonialsProps {
  testimonials: Testimonial[]
}

function StarRating({ rating }: { rating?: { key: string; value: string } }) {
  if (!rating) return null
  
  const numStars = parseInt(rating.key) || 5
  
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i}
          className={`w-5 h-5 ${i < numStars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <StarRating rating={testimonial.metadata?.rating} />
              </div>
              
              {testimonial.metadata?.testimonial_text && (
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.metadata.testimonial_text}"
                </blockquote>
              )}
              
              <div className="flex items-center space-x-4">
                {testimonial.metadata?.client_photo && (
                  <img 
                    src={`${testimonial.metadata.client_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata.client_name || 'Client'}
                    className="w-12 h-12 rounded-full object-cover"
                    width={48}
                    height={48}
                  />
                )}
                
                <div>
                  {testimonial.metadata?.client_name && (
                    <div className="font-semibold text-gray-900">
                      {testimonial.metadata.client_name}
                    </div>
                  )}
                  
                  <div className="text-gray-600 text-sm">
                    {testimonial.metadata?.position && testimonial.metadata?.company && (
                      <>
                        {testimonial.metadata.position} at {testimonial.metadata.company}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}