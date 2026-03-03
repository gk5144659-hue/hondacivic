"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function HondaPage() {
  const [color, setColor] = useState ("red");

  const carImage=
  color === "red"
    ? "https://images.hgmsites.net/med/2025-honda-civic-sport-cvt-angular-front-exterior-view_100939989_m.webp"
    : "https://mystrongad.com/Honda/2024/Civic%20Type%20R/2024-Honda-Civic-Type-R-White.webp";

    return (
      <div className="bg-black text-white overflow-hidden">
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
            HONDA <span className="text-red-600">TYPE R LEGACY</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mb-8">
             Celebrating decades of performance, innovation and racing DNA.
          </p>
          
          <button className="bg-red-600 px-6 py-3 rounded-full hover:bg-red-700 transition text-sm sm:text-base">Explore Models</button>

        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-8 text-center max-w-5xl mx-auto">
           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            <span className="text-red-600">Performance</span> Heritage
           </h2>
           <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            From the <mark>legendary NSX</mark> to modern hybrid engineering, <mark>Honda continues</mark>
            to redefine performance excellence. Each<mark> generation reflects precision,</mark>
            speed and innovation.
          </p>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-8">
           <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
               Model Gallery 
           </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
             {[
            "https://www.motorbeam.com/wp-content/uploads/2024-Honda-Civic-Hybrid-1200x900.jpg",
            "https://www.thecarexpert.co.uk/wp-content/uploads/2019/04/Honda-Civic-2018-wallpaper-1920x960.jpeg.webp",
            "https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/honda-civic-type-r-front-tracking_0.jpg?itok=mGtercfe",
             ].map((img, index) => (
              <div
               key={index}
               className="relative w-full h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
              >

                <img
                 src={img}
                 alt="Honda Model"
                 className="w-full h-full object-cover"
                />

              </div>
             ))}
           </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                  Simple Configurator
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
               <button 
                 onClick={() => setColor("red")}
                 className="bg-red-600 px-5 py-2 rounded-full text-sm sm:text-base"
               >
                Red 
               </button>
               <button
                 onClick={() => setColor("white")}
                 className="bg-gray-300 text-black px-5 py-2 rounded-full text-sm sm:text-base"
               >  
                  White
               </button>
            </div>

            <div className="relative w-full max-w-xl h-60 sm:h-72 md:h-80 mx-auto">
              <img
                src={carImage}
                alt="Car"
                className="w-full h-full object-contain rounded-2xl"/>
            </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-8 text-center bg-white/5">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Book Test Drive
            </h2>

            <form className="max-w-md mx-auto space-y-4">
                <input 
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-black border border-gray-700 text-sm sm:text-base" 
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-black border border-gray-700 text-sm sm:text-base"
                />

                <button type="submit" 
                      className="w-full bg-red-600 py-3 rounded-lg hover:bg-red-700 transition text-sm sm:text-base"
                      >
                    Submit
                </button>
            </form>
        </section>
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
                        <FaInstagram className="hover:text-honda-red transition cursor-pointer" />
                      </a>

                      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="hover:text-honda-red transition cursor-pointer" />
                      </a>

                      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="hover:text-honda-red transition cursor-pointer" />
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

