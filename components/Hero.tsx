import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We create beautiful, high-performing websites and digital solutions that drive real business results. 
              From concept to launch, we're your trusted digital partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/about" className="btn-secondary inline-flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format"
              alt="Digital agency team working"
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              width={800}
              height={600}
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">200+ Projects</p>
                  <p className="text-gray-600">Successfully Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}