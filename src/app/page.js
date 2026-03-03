"use client";
import Link from "next/link";

const generations = [
  {
    name: "Civic Type R EK9",
    year: "1997",
    power: "185 HP",
    image: "/honda-1.jpeg",
  },
  {
    name: "Civic Type R FD2",
    year: "2007",
    power: "225 HP",
    image: "/honda-2.jpg",
  },
  {
    name: "Civic Type R FK8",
    year: "2017",
    power: "306 HP",
    image: "/honda-3.jpg",
  },
  {
    name: "Civic Type R FL5",
    year: "2023",
    power: "315 HP",
    image: "/honda-4.jpeg",
  },
];

export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">
        
        {/* Background GIF */}
        <img
          src="/civic-gif.gif"
          alt="Type R Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-5xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 relative glitch">
                 <span data-text="TYPE R EVOLUTION">
                   TYPE R <span className="text-honda-red">EVOLUTION</span>
                 </span>
              </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            The ultimate front-wheel drive machine engineered for performance.
          </p>
        </div>
      </section>

      {/* ================= LEGACY SECTION ================= */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            TYPE R <span className="text-honda-red text-red-600">LEGACY</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {generations.map((car, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-52 sm:h-56 md:h-48 lg:h-52 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {car.name}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base">
                    Year: {car.year}
                  </p>

                  <p className="text-honda-red font-semibold text-sm md:text-base">
                    Power: {car.power}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= ABOUT TYPE R SECTION ================= */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-10 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            The <span className="text-red-600">Spirit</span> of <span className="text-honda-red">Type R</span>
          </h2>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            The <mark className="bg-honda-red text-black px-1 rounded">Honda Civic Type R</mark> 
            represents the pinnacle of 
            <mark className="bg-honda-red text-black px-1 rounded"> front-wheel-drive performance</mark>. 
            Engineered with precision and built for enthusiasts, every generation pushes the 
            limits of speed, handling, and aerodynamics. From the legendary 
            <mark className="bg-honda-red text-black px-1 rounded"> EK9</mark> to the modern 
            <mark className="bg-honda-red text-black px-1 rounded"> FL5</mark>, 
            Type R has consistently delivered 
            <mark className="bg-honda-red text-black px-1 rounded"> race-inspired technology</mark> 
            for the road.
          </p>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            With aggressive styling, 
            <mark className="bg-honda-red text-black px-1 rounded"> turbocharged power</mark>, 
            and track-focused suspension tuning, the Civic Type R is more than just a car — 
            it is a statement of performance and passion. Designed to dominate both the streets 
            and the circuit, it continues to evolve while staying true to its 
            <mark className="bg-honda-red text-black px-1 rounded"> racing heritage</mark>.
          </p>

        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-black to-zinc-900">
           <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16">
              PERFORMANCE <span className="text-honda-red text-red-600">UNLEASHED</span> 
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "315", label: "Horsepower", unit: "HP" },
                { value: "420", label: "Torque", unit: "Nm" },
                { value: "5.4", label: "0-100 km/h", unit: "sec" },
                { value: "275", label: "Top Speed", unit: "km/h" },
              ].map((spec, index) => (
                <div
                    key={index}
                    className="bg-white/5 backdrop-blur-lg p-4 rounded-2xl
                                 border border-white/10
                                 hover:border-honda-red
                                 hover:scale-105
                                 transition duration-500"
                                 >
                    <h3 className="text-4xl md:text-2xl font-extrabold text-honda-red mb-2">
                      {spec.value}
                     <span className="text-xs sm:text-sm md:text-lg ml-1 text-white">{spec.unit}</span>
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base tracking-wide">
                      {spec.label}
                    </p>
                </div>
              ))}

            </div>
           </div>
      </section>
      
      <section className="py-20 px-6 bg-black">
          <div className="max-w-7xl mx-auto text-center">
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16">
                DESIGN <span className="text-honda-red text-red-600">GALLERY</span> 
             </h2>

             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {["/blue-honda.png", "/civic.png", "/Honda-Civic3.jpg"].map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl group"
                    >
                      <img 
                        src={image}
                        alt="Type R"
                        className="w-full h-72 object-cover
                                   group-hover:scale-110
                                   transition duration-700"
                        />

                  </div>
                ))}
             </div>
          </div>
      </section>

      {/* ================= CTA SECTION ================= */}
          <section className="py-24 px-6 bg-gradient-to-r from-honda-red to-red-700 text-center">
            <div className="max-w-4xl mx-auto">

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Experience The Thrill
              </h2>

              <p className="text-white/80 mb-8 text-sm sm:text-base md:text-lg">
                Precision engineered. Track tested. Street dominant.
              </p>

              <button className="bg-black text-white px-8 py-4 rounded-full 
                                font-semibold tracking-wide 
                                hover:bg-white hover:text-black 
                                transition duration-500">
                Explore More
              </button>

            </div>
          </section>
          {/* ================= FOOTER SECTION ================= */}
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
      <div className="flex space-x-4 text-sm">
        <span className="hover:text-honda-red transition cursor-pointer">Instagram</span>
        <span className="hover:text-honda-red transition cursor-pointer">YouTube</span>
        <span className="hover:text-honda-red transition cursor-pointer">Twitter</span>
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