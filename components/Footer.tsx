import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Digital Agency</h3>
            <p className="text-gray-300 mb-6">
              We create digital solutions that drive real business results. Let's transform your online presence together.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📧 hello@agency.com</p>
              <p>📞 (555) 123-4567</p>
              <p>📍 123 Digital Street, Tech City, TC 12345</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
              <li>SEO Optimization</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Digital Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}