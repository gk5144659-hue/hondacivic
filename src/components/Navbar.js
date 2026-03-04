"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (path) =>
    `block px-4 py-2 transition ${
      pathname === path
        ? "text-honda-red"
        : "text-white hover:text-honda-red"
    }`;

  return (
    <nav className="bg-black/80 backdrop-blur-md fixed w-full z-50 overflow-hidden">
      <div className="flex justify-between items-center p-4 md:px-10">
        
      {/* Moving Car*/}
      <div className="absolute bottom-0 left-0 w-full h-20 pointer-events-none flex justify-evenly items-end">

         <Image
          src ="/honda-run4.png"
          alt="moving car"
          width={90}
          height={40}
          className="car-animation"
         />
      </div>

        <div className="flex items-center gap-3">
          <Image
            src="/honda-civic.png"
            alt="Honda Logo"
            width={70}
            height={70}
            className="object-contain"
          />
          <h1 className="text-xl md:text-2xl font-bold text-red-600 text-shadow-white-600">
            HONDA<br></br><span className="text-honda-red">CIVIC</span>
          </h1>
        </div>


        <div className="hidden md:flex gap-6">
          <Link href="/" className={`${linkClass("/")} hover:underline`}>Home</Link>
          <Link href="/legacy" className={`${linkClass("/legacy")} hover:underline `}>Legacy</Link>
          <Link href="/configurator" className={`${linkClass("/configurator")} hover:underline`}>Configurator</Link>
          <Link href="/gallery" className={`${linkClass("/gallery")} hover:underline`}>Gallery</Link>
        </div>


        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 flex flex-col px-6 pb-4 space-y-2">
          <Link href="/" className={linkClass("/")} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/legacy" className={linkClass("/legacy")} onClick={() => setIsOpen(false)}>Legacy</Link>
          <Link href="/configurator" className={linkClass("/configurator")} onClick={() => setIsOpen(false)}>Configurator</Link>
          <Link href="/gallery" className={linkClass("/gallery")} onClick={() => setIsOpen(false)}>Gallery</Link>
        </div>
      )}
    </nav>
  );
}