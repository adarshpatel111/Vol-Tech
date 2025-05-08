import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-white p-2 rounded-full mr-3">
                <Image
                  src="/images/logo.png"
                  alt="Vol-Tech Industries Logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
              <div>
                <span className="font-bold text-lg">Vol-Tech</span>
                <p className="text-white">Industries</p>
              </div>
            </div>
            <p className="text-white/90 mb-4">Our Company make's best Transformers.</p>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Menu Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/90 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/90 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/90 hover:text-white transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/90 hover:text-white transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/90 hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">For Marketing</p>
                <p className="text-white/90">Ghanshyambhai Patel</p>
                <p className="text-white/90">Call: +91 9825307217</p>
                <p className="text-white/90">Call: +91 9825043350</p>
              </div>
              <div>
                <p className="font-semibold">For Maintenance</p>
                <p className="text-white/90">Ghanshyambhai Patel</p>
                <p className="text-white/90">Call: +91 9825307217</p>
                <p className="text-white/90">Kirit Patel</p>
                <p className="text-white/90">Call: +91 9998983266</p>
              </div>
            </div>
          </div>

          {/* Address Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Address</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                <div>
                  <p className="text-white/90">info@voltechtransformer.com</p>
                  <p className="text-white/90">sale@voltechtransformer.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-white mr-2 mt-1 flex-shrink-0" />
                <p className="text-white/90">
                  878/12 SAHJANAND RICE MILL COMPOUND, WAGHODIA - 391 760, VADODARA, GUJARAT, INDIA
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center text-white/90 mb-2 md:mb-0">
            Copyright © 2009 Vol-Tech Industries. - Designed By Adarsh Patel
          </p>
          <p className="text-white/90">ISO :9001:2000 Certified Company</p>
        </div>
      </div>
    </footer>
  )
}
