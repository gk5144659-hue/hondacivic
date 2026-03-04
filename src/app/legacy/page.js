"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const generations = [
  {
    name: "Honda NSX",
    year: "1990-2007",
    power: "270-290 HP",
    image: "https://www.carlogos.org/uploads/2022/greatest-honda-cars-nsx-1st.jpg",
  },
  {
    name: "Honda Prelude",
    year: "2026",
    power: "200 HP",
    image: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/0c19e68b-3067-4e83-b1f4-d6ce8e3dadc0/prelude_preview-928x522.jpg?t=1754929101",
  },
  {
    name: "Honda NSX Tribute",
    year: "2017",
    power: "600-602",
    image: "https://robbreport.com/wp-content/uploads/2026/01/honda-nsx-tribute-italdesign-00.jpg?w=1024",
  },
  {
    name: "Honda NSX",
    year: "2006",
    power: "270-290 HP",
    image: "https://www.gearpatrol.com/wp-content/uploads/sites/2/2025/10/Honda-NSX-Revival-Part-Deux-5.jpg.webp",
  },
    {
    name: "Honda NSX Tribute by Italdesign",
    year: "2025",
    power: "573 HP",
    image: "https://interestingengineering.com/_next/image?url=https%3A%2F%2Fcms.interestingengineering.com%2Fwp-content%2Fuploads%2F2026%2F01%2FIE-Photo-12.jpg&w=3840&q=75",
  },
    {
    name: "Honda NSX (New Model)",
    year: "2016-2022",
    power: "573 HP",
    image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/NSX/1382/1594631340840/front-left-side-47.jpg",
  },
    {
    name: "Acura NSX",
    year: "2002",
    power: "290 HP",
    image: "https://www.topcarrating.com/honda/1990-honda-nsx-3.jpg",
  },
    {
    name: "Honda Civic",
    year: "2025",
    power: "200-204 HP",
    image: "https://images.hgmsites.net/med/2025-honda-civic-sport-cvt-angular-front-exterior-view_100939989_m.webp",
  },
];

export default function Legacy() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-16">
        TYPE R <span className="text-red-600">LEGACY</span>
      </h1>

      <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg p-4 sm:p-6 md:p-10">
        <mark>Honda</mark> ki performance legacy sirf speed nahi, ek attitude hai. Legendary <mark>Honda NSX</mark> ne supercar world ko challenge kiya,
         jabki modern hybrid beast <mark>Acura NSX </mark>ne power aur technology ko next level tak push kiya.
          Naya Honda Prelude sporty spirit ko revive karta hai, aur globally loved <mark>Honda Civic </mark>
          har generation ke drivers ka favourite bana hua hai. Yeh gallery speed, 
          precision aur racing DNA ka celebration hai.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {generations.map((car, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{car.name}</h2>
              <p className="text-gray-400">Year: {car.year}</p>
              <p className="text-red-600 font-semibold">
                Power: {car.power}
              </p>
            </div>
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