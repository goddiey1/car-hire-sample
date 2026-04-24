import Link from "next/link";

export interface Car {
 id: string;
 brand: string;
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
 const formattedPrice = `Ksh.${car.price_per_day.toLocaleString(undefined, {
 minimumFractionDigits: 2,
 maximumFractionDigits: 2,
 })}`;
 const whatsappHref = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Godfrey Hire! I am interested in booking the ${car.brand} ${car.model}. Could you provide more details?`)}`;
 const callHref = `tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`;

 return (
 <article
 className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-lg border border-neutral-200 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300"
 >
 {/* Image Section - 16:9 on mobile, 4:3 on larger screens */}
 <Link
 href={`/car/${car.id}`}
 className="relative aspect-video sm:aspect-[4/3] w-full block bg-neutral-100 overflow-hidden"
 aria-label={`View details for ${car.brand} ${car.model}`}
 >
 <img
 src={car.images[0]}
 alt={`${car.brand} ${car.model} - ${car.category}`}
 className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
 loading="lazy"
 />

 {/* Availability Badge */}
 <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
 <span
 className={`inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded backdrop-blur-md text-[9px] sm:text-[10px] font-bold text-white tracking-widest uppercase shadow-lg ${
 car.available
 ? "bg-emerald-500/90 shadow-emerald-500/20"
 : "bg-red-500/90 shadow-red-500/20"
 }`}
 >
 <span
 className={`w-1.5 h-1.5 rounded-full mr-1 sm:mr-1.5 ${
 car.available ? "bg-white animate-pulse" : "bg-white"
 }`}
 aria-hidden="true"
 />
 {car.available ? "Available" : "Booked"}
 </span>
 </div>
 </Link>

 {/* Content Section */}
 <div className="flex flex-col p-3 sm:p-5 flex-1 relative z-20 bg-white ">
 {/* Header */}
 <div className="mb-3 sm:mb-4">
 <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-emerald-600 transition-colors">
 {car.brand} {car.model}
 </h3>
 </div>

 {/* Specs Grid - Simplified */}
 <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-4 sm:mb-5">
 <div className="flex flex-col items-center justify-center py-1.5 sm:py-2 px-1 rounded bg-neutral-100 ">
 <svg
 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 mb-0.5 sm:mb-1"
 fill="none"
 viewBox="0 0 24 24"
 stroke="currentColor"
 aria-hidden="true"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth={1.5}
 d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
 />
 </svg>
 <span className="text-[10px] sm:text-[11px] text-neutral-700 font-medium">{car.specs.seats} Seats</span>
 </div>

 <div className="flex flex-col items-center justify-center py-1.5 sm:py-2 px-1 rounded bg-neutral-100 ">
 <svg
 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 mb-0.5 sm:mb-1"
 fill="none"
 viewBox="0 0 24 24"
 stroke="currentColor"
 aria-hidden="true"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth={1.5}
 d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
 />
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth={1.5}
 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
 />
 </svg>
 <span className="text-[10px] sm:text-[11px] text-neutral-700 font-medium">
 {car.specs.transmission === "Automatic" ? "Auto" : "Manual"}
 </span>
 </div>

 <div className="flex flex-col items-center justify-center py-1.5 sm:py-2 px-1 rounded bg-neutral-100 ">
 <svg
 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 mb-0.5 sm:mb-1"
 fill="none"
 viewBox="0 0 24 24"
 stroke="currentColor"
 aria-hidden="true"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth={1.5}
 d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
 />
 </svg>
 <span className="text-[10px] sm:text-[11px] text-neutral-700 font-medium">{car.specs.fuel_type}</span>
 </div>
 </div>

 {/* Price */}
 <div className="flex items-baseline mb-4 sm:mb-5">
 <span className="text-xl sm:text-2xl font-bold text-emerald-600 ">{formattedPrice}</span>
 <span className="text-sm text-neutral-600 ml-1">/day</span>
 </div>

 <Link
 href={`/car/${car.id}`}
 className="mb-4 inline-flex w-fit items-center rounded-lg border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs sm:text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-100 hover:text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-200"
 >
 View details
 <svg className="ml-1 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
 </svg>
 </Link>

 {/* CTA Buttons */}
 <div className="mt-auto grid grid-cols-2 gap-2">
 <a
 href={callHref}
 className="flex items-center justify-center w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition-all duration-200 bg-sky-600 text-white hover:bg-sky-700 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-300"
 >
 <svg
 className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 fill-current"
 fill="none"
 viewBox="0 0 24 24"
 stroke="currentColor"
 aria-hidden="true"
 >
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
 </svg>
 Call
 </a>

 <a
 href={whatsappHref}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-center w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm shadow-lg transition-all duration-200 bg-[#25D366] text-white hover:bg-[#1ebd5b] hover:shadow-[#25D366]/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-white"
 >
 <svg
 className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 fill-current"
 viewBox="0 0 24 24"
 aria-hidden="true"
 >
 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
 </svg>
 WhatsApp
 </a>
 </div>
 </div>
 </article>
 );
}
