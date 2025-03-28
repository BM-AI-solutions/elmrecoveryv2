import Link from 'next/link'
import { Leaf, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { ElmLogo } from '../ui/ElmLogo' // Use the full logo if desired

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondaryGray-900 text-secondaryGray-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container-custom py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and Social */}
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center">
              {/* Using ElmLogo for consistency, adjust size as needed */}
              <ElmLogo className="h-10 w-auto text-white" /> 
            </Link>
            <p className="text-secondaryGray-400 text-sm leading-6 max-w-xs">
              Providing safe, supportive, and structured sober living housing in San Diego, California.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-secondaryGray-400 hover:text-white transition-colors duration-150 ease-in-out">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondaryGray-400 hover:text-white transition-colors duration-150 ease-in-out">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondaryGray-400 hover:text-white transition-colors duration-150 ease-in-out">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondaryGray-400 hover:text-white transition-colors duration-150 ease-in-out">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Quick Links</h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li><Link href="/housing" className="text-sm leading-6 text-secondaryGray-400 hover:text-white transition-colors">Our Homes</Link></li>
                  <li><Link href="/apply" className="text-sm leading-6 text-secondaryGray-400 hover:text-white transition-colors">Apply Now</Link></li>
                  <li><Link href="/resources" className="text-sm leading-6 text-secondaryGray-400 hover:text-white transition-colors">Recovery Resources</Link></li>
                  {/* <li><Link href="/blog" className="text-sm leading-6 text-secondaryGray-400 hover:text-white transition-colors">Blog</Link></li> */}
                  {/* <li><Link href="/faq" className="text-sm leading-6 text-secondaryGray-400 hover:text-white transition-colors">FAQs</Link></li> */}
                </ul>
              </div>
              {/* Information */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Information</h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li><Link href="/about" className="text-sm leading-6 text-secondaryGray-400 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/privacy" className="text-sm leading-6 text-secondaryGray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-sm leading-6 text-secondaryGray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                  {/* <li><Link href="/hipaa" className="text-sm leading-6 text-secondaryGray-400 hover:text-white transition-colors">HIPAA Compliance</Link></li> */}
                  {/* <li><Link href="/accessibility" className="text-sm leading-6 text-secondaryGray-400 hover:text-white transition-colors">Accessibility</Link></li> */}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8"> {/* Changed to 1 col for contact */}
              {/* Contact */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Contact Us</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <address className="text-sm leading-6 text-secondaryGray-400 not-italic">
                      123 Recovery Road<br />
                      San Diego, CA 92101
                    </address>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" aria-hidden="true" />
                    <a href="tel:+16195551234" className="text-sm leading-6 text-secondaryGray-400 hover:text-white transition-colors">(619) 555-1234</a>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" aria-hidden="true" />
                    <a href="mailto:info@elmrecovery.com" className="text-sm leading-6 text-secondaryGray-400 hover:text-white transition-colors">info@elmrecovery.com</a>
                  </li>
                  {/* Crisis Line - Enhanced Visibility */}
                  <li className="mt-6 pt-6 border-t border-secondaryGray-700/50">
                     <div className="bg-secondaryGray-800 p-4 rounded-lg ring-1 ring-red-400/50">
                       <p className="text-sm font-semibold text-red-300 mb-1">Need Immediate Help?</p>
                       <p className="text-secondaryGray-400 text-xs mb-2">
                         Our 24/7 crisis support line:
                       </p>
                       <a href="tel:+18005551234" className="flex items-center text-white hover:text-primary-300 font-medium text-sm">
                         <Phone className="h-4 w-4 mr-2" />
                         (800) 555-1234
                       </a>
                     </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-secondaryGray-700/50 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs leading-5 text-secondaryGray-500">
              &copy; {currentYear} Elm Recovery. All rights reserved.
            </p>
            <p className="text-xs leading-5 text-secondaryGray-500 text-center md:text-right">
              Licensed by the California Department of Health Care Services (DHCS)
              {/* Add License Number if available: License # XXXXXX */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
