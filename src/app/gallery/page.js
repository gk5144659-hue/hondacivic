import Link from "next/link";
import CarModel from "@/components/CarModel";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function GalleryPage() {

  const images = [
    "/images1.png",
    "/images2.webp",
    "/images3.jpg",
    "/images4.jpeg",
    "/images5.jpg",
    "/images6.jpg",
    "/images7.jpeg",
    "/images44.jpg",
    "/images9.avif",
    "/images10.jpg",
    "/images11.jpg",
    "/images12.jpg",
    "/images13.jpeg",
    "/images14.webp",
    "/images15.jpg",
    "/images10.jpg",
  ];

  return (
    <div className="min-h-screen flex flex-col gap-6 md:gap-10 p-4 sm:p-6 md:p-10">
    
    <div className="w-full h-[60vh] min-h-[300px]">
         <CarModel />
    </div>
    
      {/* Links Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/gallery/old-model"
          className="w-full sm:w-auto border p-3 sm:p-4 text-center rounded-lg font-bold 
                     hover:bg-red-600 hover:text-white transition"
        >
          Old Model
        </Link>

        <Link
          href="/gallery/new-model"
          className="w-full sm:w-auto border p-3 sm:p-4 text-center rounded-lg font-bold 
                     hover:bg-red-600 hover:text-white transition"
        >
          New Model
        </Link>
      </div>

      <div className="grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-4
            gap-5"
            >
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={src}
                  alt={`Car ${index}`}
                  className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                />
            </div>
          ))}
      </div>

      <footer className="bg-zinc-950 text-gray-400 px-6 py-16 border-t border-white/10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* Brand Section */}
    <div>
      <h3 className="text-2xl font-bold text-white mb-4">
        TYPE R <span className="text-honda-red">EVOLUTION</span>
      </h3>
      <p className="text-sm leading-relaxed">
        Built for performance. Engineered for passion.
        Experience the legacy of the Civic Type R.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-white font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/" className="hover:text-honda-red transition cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <Link href="/legacy" className="hover:text-honda-red transition cursor-pointer">
            Legacy
          </Link>
        </li>
        <li>
          <Link href="/configurator" className="hover:text-honda-red transition cursor-pointer">
            Performance
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="hover:text-honda-red transition cursor-pointer">
            Gallery
          </Link>
        </li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h4 className="text-white font-semibold mb-4">Contact</h4>
      <ul className="space-y-2 text-sm">
        <li>Email: typer@honda.com</li>
        <li>Phone: +91 98765 43210</li>
        <li>Location: Tokyo, Japan</li>
      </ul>
    </div>

    {/* Social */}
    <div>
      <h4 className="text-white font-semibold mb-4">Follow Us</h4>
      <div className="flex space-x-4 text-xl">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="transition-all duration-300 hover:text-[#ea447b] group-hover:scale-110" />
        </a>

        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="hover:text-red-600 transition cursor-pointer" />
        </a>

        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-blue-600 transition cursor-pointer" />
        </a>
    </div>
    </div>

  </div>

  {/* Bottom Line */}
  <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
    © {new Date().getFullYear()} TYPE R Evolution. All rights reserved.
  </div>
</footer>

    </div>
  );
}