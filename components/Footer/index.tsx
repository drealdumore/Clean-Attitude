import Link from "next/link";
import { _siteDetails } from "@/lib/config";
import SocialsBlock from "./SocialsBlock";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="maxContainer pxm py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-md">
              Professional cleaning services in Abuja, Nigeria. We deliver
              exceptional cleaning solutions for homes and businesses with
              attention to detail and customer satisfaction.
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white mb-2">
                Contact Us
              </p>
              <p className="text-gray-400 text-sm">📞 +234 803 779 3629</p>
              <p className="text-gray-400 text-sm">📍 Abuja, Nigeria</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-3">
              {_siteDetails.menuLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.link}
                  className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <SocialsBlock />
            <div className="mt-6">
              <p className="text-sm font-semibold text-white mb-2">
                Business Hours
              </p>
              <p className="text-gray-400 text-sm">
                Mon - Sat: 8:00 AM - 6:00 PM
              </p>
              <p className="text-gray-400 text-sm">
                Sunday: Available on request
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {_siteDetails.name}. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
