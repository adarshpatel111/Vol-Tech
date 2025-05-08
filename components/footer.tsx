"use client";
import Image from "next/image";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [hovered, setHovered] = useState<string | null>(null);

  const links = [
    {
      title: "Menu Links",
      items: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "Services", href: "/services" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
  ];

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
                  width={100}
                  height={100}
                  className="rounded"
                />
              </div>
              <div>
                <span className="font-bold text-lg">Vol-Tech</span>
                <p className="text-white">Industries</p>
              </div>
            </div>
            <p className="text-white/90 mb-4">
              Our Company make's best Transformers.
            </p>
          </div>

          {/* Menu Links */}
          {links.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 text-white">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <motion.a
                      href={item.href}
                      className="group flex items-center text-white/90 hover:text-white transition-colors duration-300"
                      onMouseEnter={() =>
                        setHovered(`${group.title}-${item.name}`)
                      }
                      onMouseLeave={() => setHovered(null)}
                      whileHover={{ x: 5 }}
                    >
                      {item.name}
                      <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        animate={{
                          opacity:
                            hovered === `${group.title}-${item.name}` ? 1 : 0,
                          x: hovered === `${group.title}-${item.name}` ? 0 : -5,
                        }}
                        className="ml-1"
                      >
                        <ArrowUpRight className="w-3 h-3 inline" />
                      </motion.span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
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
                  878/12 SAHJANAND RICE MILL COMPOUND, WAGHODIA - 391 760,
                  VADODARA, GUJARAT, INDIA
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center text-white/90 mb-2 md:mb-0">
            Copyright © 2009 Vol-Tech Industries. -{" "}
            <span>
              <a
                href="https://theadarsh.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                Designed by Adarsh Patel
              </a>
            </span>
          </p>
          <p className="text-white/90">ISO :9001:2000 Certified Company</p>
        </div>
      </div>
    </footer>
  );
}
