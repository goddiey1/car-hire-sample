import carsData from "@/data/cars.json";
import { Car } from "@/components/CarCard";
import FleetSection from "@/components/FleetSection";
import TrustBanner from "@/components/TrustBanner";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
 const cars: Car[] = carsData as Car[];

 return (
 <div className="flex flex-col min-h-screen">

 {/* 1. Hero Section - Optimized for clarity and conversion */}
 <section
 className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-28 lg:pb-24 overflow-hidden"
 aria-label="Hero"
 >
 {/* Background Image with Overlay */}
 <div className="absolute inset-0 z-0">
 <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 z-10" />
 <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10" />
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img
 src="/range.jpg"
 alt="Premium car rental fleet in Nairobi"
 className="w-full h-full object-cover object-center"
 />
 </div>

 <div className="container mx-auto px-4 relative z-20">
 <div className="max-w-2xl">
 {/* Tagline */}
 <p className="text-emerald-400 font-semibold mb-3 sm:mb-4 tracking-wide uppercase text-xs sm:text-sm">
 Nairobi&apos;s Trusted Car Hire Service
 </p>

 {/* Main Headline - Responsive sizing */}
 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 sm:mb-6 leading-[1.15] sm:leading-tight">
 Rent a Car Now — <span className="text-emerald-400">Book on WhatsApp</span>
 </h1>

 {/* Subheadline - Value proposition */}
 <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-6 sm:mb-8 max-w-lg">
 Clean, reliable vehicles at competitive rates.
 </p>

 {/* CTA Buttons - Full width on mobile */}
 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
 <a
 href="#fleet"
 className="inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-neutral-950 bg-white rounded-xl hover:bg-neutral-100 transition-all shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950"
 >
 View Available Cars
 </a>
 <a
 href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Godfrey Hire! I want to book a car. What do you have available?')}`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white bg-[#25D366] rounded-xl hover:bg-[#1ebd5b] transition-all shadow-xl hover:shadow-[#25D366]/30 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-neutral-950"
 >
 <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
 </svg>
 Quick Enquiry
 </a>
 </div>
 </div>
 </div>
 </section>

 {/* 2. Trust Banner - Social proof */}
 <TrustBanner />

 {/* 3. Available Cars - Grid */}
 <FleetSection cars={cars} />

 {/* 4. Why Choose Us - Simplified */}
 <section
 className="py-12 sm:py-16 bg-[#c5e6cb]/50 border-y border-neutral-900/10 "
 aria-labelledby="why-heading"
 >
 <div className="container mx-auto px-4">
 <div className="text-center mb-8 sm:mb-12">
 <h2 id="why-heading" className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2 sm:mb-3">Why Choose Us</h2>
 <p className="text-neutral-600 text-sm sm:text-base">Trusted by hundreds of clients in Nairobi</p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
 {[
 {
 icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
 color: "blue",
 title: "No Hidden Fees",
 desc: "What you see is what you pay. Clear daily rates with no surprises."
 },
 {
 icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
 color: "emerald",
 title: "Quality Guaranteed",
 desc: "Every car is serviced and cleaned before handover. We don't compromise."
 },
 {
 icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
 color: "purple",
 title: "Instant Response",
 desc: "Message us on WhatsApp and get a reply within 5 minutes, guaranteed."
 }
 ].map((item, index) => (
 <div
 key={index}
 className="bg-[#daf1de] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-neutral-900/10 hover:border-neutral-900/20 transition-colors shadow-sm "
 >
 <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-${item.color}-500/10 text-${item.color}-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4`}>
 <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
 </svg>
 </div>
 <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-1 sm:mb-2">{item.title}</h3>
 <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* 5. How It Works - Visual improvement */}
 <section
 className="py-12 sm:py-16"
 aria-labelledby="how-heading"
 >
 <div className="container mx-auto px-4">
 <div className="text-center mb-8 sm:mb-12">
 <h2 id="how-heading" className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2 sm:mb-3">How It Works</h2>
 <p className="text-neutral-600 text-sm sm:text-base">Three simple steps to get you on the road</p>
 </div>

 <div className="max-w-4xl mx-auto">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
 {/* Connecting line - hidden on mobile */}
 <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

 {[
 { step: "1", title: "Choose", desc: "Browse and pick your ideal vehicle from our fleet" },
 { step: "2", title: "Message", desc: "Click the WhatsApp button to send your enquiry" },
 { step: "3", title: "Drive", desc: "Confirm details, pay, and pick up your car" }
 ].map((item, index) => (
 <div key={index} className="relative flex flex-col items-center text-center">
 <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6 relative z-10 shadow-lg ${index === 1
 ? 'bg-[#25D366] text-white shadow-[#25D366]/30'
 : 'bg-[#daf1de] border-2 border-neutral-300 text-neutral-900 '
 }`}>
 {item.step}
 </div>
 <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-1 sm:mb-2">{item.title}</h3>
 <p className="text-neutral-600 text-sm sm:text-base">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* 6. Contact Section - Streamlined */}
 <section
 id="contact"
 className="py-12 sm:py-16 bg-[#c5e6cb]/50 border-t border-neutral-900/10 "
 aria-labelledby="contact-heading"
 >
 <div className="container mx-auto px-4">
 <div className="max-w-3xl mx-auto text-center">
 <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3 sm:mb-4">Ready to Book?</h2>
 <p className="text-neutral-600 text-sm sm:text-base mb-6 sm:mb-8">
 Message us on WhatsApp for instant assistance. We typically respond within minutes.
 </p>

 <a
 href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Godfrey Hire! I am looking to hire a car. Can you help me?')}`}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#25D366] text-white rounded-xl font-bold text-base sm:text-lg hover:bg-[#1ebd5b] transition-all shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-neutral-900 w-full sm:w-auto"
 >
 <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 fill-current" viewBox="0 0 24 24">
 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
 </svg>
 Message Us on WhatsApp
 </a>

 <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm">
 <a
 href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
 className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors focus:outline-none focus:text-neutral-900 "
 >
 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
 </svg>
 {process.env.NEXT_PUBLIC_CONTACT_PHONE}
 </a>
 <span className="hidden sm:block text-neutral-400 ">|</span>
 <span className="flex items-center gap-2 text-neutral-600 ">
 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
 </svg>
 CBD, Nairobi
 </span>
 </div>
 </div>
 </div>
 </section>

 {/* Floating WhatsApp Button */}
 <FloatingWhatsApp />

 </div>
 );
}
