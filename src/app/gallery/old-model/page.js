import Image from "next/image";

export default function OldModel() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-12">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        Old Honda <span className="text-red-600">Models</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* Model 1 */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="https://mma.prnewswire.com/media/1860801/1st_Gen_1975_Honda_Civic_Hatchback.jpg?p=twitter"
            alt="1973 Honda Civic"
            width={800}
            height={500}
            className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <p className="text-base sm:text-lg md:text-xl font-semibold">
              1973 Honda Civic
            </p>
          </div>
        </div>

        {/* Model 2 */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="https://stories.hemmings.com/wp-content/uploads/2024/03/origin-16117.jpg?w=500"
            alt="1985 Honda Civic"
            width={800}
            height={500}
            className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <p className="text-base sm:text-lg md:text-xl font-semibold">
              1985 Honda Civic
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}