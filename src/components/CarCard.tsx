import Image from "next/image";
import Link from "next/link";

export interface Car {
  id: string;
  make: string;
  model: string;
  category: string;
  price_per_day: number;
  images: string[];
  specs: {
    seats: number;
    transmission: string;
    fuel_type: string;
  };
  available: boolean;
}

export default function CarCard({ car }: { car: Car }) {
  // Format price exactly like Ksh.X,XXX.00
  const formattedPrice = `Ksh.${car.price_per_day.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-[#1c1c1c] shadow-lg border border-white/5 hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300">
      
      {/* Top Image Section */}
      <Link href={`/car/${car.id}`} className="relative aspect-[4/3] w-full block bg-black overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={car.images[0]}
          alt={`${car.make} ${car.model}`}
          className="h-full w-full object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        {/* Availability Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-md backdrop-blur-md text-[10px] font-bold text-white tracking-widest uppercase shadow-lg ${
            car.available ? 'bg-emerald-500/90 shadow-emerald-500/20' : 'bg-red-500/90 shadow-red-500/20'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${car.available ? 'bg-white animate-pulse' : 'bg-white'}`}></span>
            {car.available ? 'Available' : 'Booked'}
          </span>
        </div>

        {/* Heart Icon Top Right */}
        <button className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-black/60 hover:text-red-400 text-white transition-all z-10">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </Link>

      {/* Content Section */}
      <div className="flex flex-col p-5 flex-1 relative z-20 bg-[#1c1c1c]">
        
        {/* Header (Category & Title) */}
        <div className="mb-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-500/80 block mb-1">
            {car.category}
          </span>
          <h3 className="text-[18px] font-bold text-white tracking-wide group-hover:text-emerald-400 transition-colors">
            {car.make} {car.model}
          </h3>
        </div>

        {/* Specs Grid (4 boxes) */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {/* Seats */}
          <div className="flex flex-col items-center justify-center py-2 px-1 rounded border border-gray-800 bg-[#222] group-hover:bg-[#2a2a2a] group-hover:border-gray-700 transition-colors">
            <svg className="w-4 h-4 text-emerald-500/70 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="text-[12px] text-white font-semibold leading-tight">{car.specs.seats}</span>
            <span className="text-[9px] text-gray-500 uppercase tracking-wide">Seats</span>
          </div>
          {/* Transmission */}
          <div className="flex flex-col items-center justify-center py-2 px-1 rounded border border-gray-800 bg-[#222] group-hover:bg-[#2a2a2a] group-hover:border-gray-700 transition-colors">
            <svg className="w-4 h-4 text-emerald-500/70 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span className="text-[12px] text-white font-semibold leading-tight capitalize">{car.specs.transmission === 'Automatic' ? 'Auto' : 'Manual'}</span>
            <span className="text-[9px] text-gray-500 uppercase tracking-wide">Trans</span>
          </div>
          {/* Doors */}
          <div className="flex flex-col items-center justify-center py-2 px-1 rounded border border-gray-800 bg-[#222] group-hover:bg-[#2a2a2a] group-hover:border-gray-700 transition-colors">
            <svg className="w-4 h-4 text-emerald-500/70 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 19V5a2 2 0 012-2h10a2 2 0 012 2v14M5 19h14M10 12h.01" />
            </svg>
            <span className="text-[12px] text-white font-semibold leading-tight">4</span>
            <span className="text-[9px] text-gray-500 uppercase tracking-wide">Doors</span>
          </div>
          {/* Bags/Luggage */}
          <div className="flex flex-col items-center justify-center py-2 px-1 rounded border border-gray-800 bg-[#222] group-hover:bg-[#2a2a2a] group-hover:border-gray-700 transition-colors">
            <svg className="w-4 h-4 text-emerald-500/70 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="text-[12px] text-white font-semibold leading-tight">2</span>
            <span className="text-[9px] text-gray-500 uppercase tracking-wide">Bags</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800/80 mb-5" />

        {/* Price Row */}
        <div className="flex items-baseline mb-5">
          <span className="text-2xl font-bold text-[#25D366] drop-shadow-sm">{formattedPrice}</span>
          <span className="text-sm text-gray-400 ml-1 font-medium">/ day</span>
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <a 
            href={car.available ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Godfrey Hire! I am interested in booking the ${car.make} ${car.model}. Could you provide more details?`)}` : '#'}
            target={car.available ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-[15px] shadow-lg transition-all duration-300 ${
              car.available 
                ? 'bg-[#25D366] text-white hover:bg-[#1ebd5b] hover:shadow-[#25D366]/30 hover:-translate-y-0.5' 
                : 'bg-neutral-800 text-neutral-500 cursor-not-allowed pointer-events-none'
            }`}
          >
            <svg className="w-4 h-4 mr-2.5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Book via WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
