import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import carsData from "@/data/cars.json";
import { Car } from "@/components/CarCard";
import ImageGallery from "@/components/ImageGallery";

// Enable static generation for all cars
export async function generateStaticParams() {
  const cars = carsData as Car[];
  return cars.map((car) => ({
    id: car.id,
  }));
}

export default async function CarDetailsPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const cars = carsData as Car[];
  const car = cars.find((c) => c.id === id);

  if (!car) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      
      <Link href="/" className="inline-flex items-center text-sm font-medium text-neutral-400 hover:text-white transition-colors mb-8">
        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Fleet
      </Link>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Left Column (Gallery) */}
        <div className="lg:w-3/5 flex flex-col gap-4">
          <ImageGallery 
            images={car.images} 
            altPrefix={`${car.make} ${car.model}`}
            available={car.available}
          />
        </div>

        {/* Right Column (Details) */}
        <div className="lg:w-2/5 flex flex-col">
          <div className="inline-block mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/50">
              {car.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2">
            {car.make} <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">{car.model}</span>
          </h1>
          
          <div className="my-8 pb-8 border-b border-white/10">
            <span className="text-5xl font-bold text-[#ff4500]">Ksh. {car.price_per_day.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            <span className="text-lg text-neutral-500 uppercase tracking-wider font-semibold ml-2">/ day</span>
          </div>

          <div className="mb-10 flex-1">
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Key Specifications</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-neutral-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4 ring-1 ring-white/10">
                  <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-0.5">Seats</span>
                  <span className="font-medium text-white">{car.specs.seats} Persons</span>
                </div>
              </li>
              <li className="flex items-center text-neutral-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4 ring-1 ring-white/10">
                  <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-0.5">Transmission</span>
                  <span className="font-medium text-white">{car.specs.transmission}</span>
                </div>
              </li>
              <li className="flex items-center text-neutral-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4 ring-1 ring-white/10">
                  <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-0.5">Fuel Type</span>
                  <span className="font-medium text-white">{car.specs.fuel_type}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Action Area */}
          <div className="mt-8 lg:mt-auto pt-6">
            <a 
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Godfrey Hire! I am interested in booking the ${car.make} ${car.model}. Could you provide more details?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-full py-5 px-6 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 ${
                car.available
                  ? 'bg-[#25D366] text-white hover:bg-[#1ebd5b] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(37,211,102,0.3)]'
                  : 'bg-neutral-800 text-neutral-500 cursor-not-allowed pointer-events-none'
              }`}
            >
              <svg className="w-6 h-6 mr-3 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {car.available ? 'Book via WhatsApp' : 'Currently Unavailable'}
            </a>
            <p className="text-center text-xs text-neutral-500 mt-4">
              Our team usually responds within 5 minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
