import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-primary-600">
      <div className="container-max text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          Let's discuss your project and create something amazing together. Get a free consultation and personalized proposal.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center bg-white text-primary-600 font-medium py-4 px-8 rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          Start Your Project Today
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}