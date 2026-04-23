export default function TrustBanner() {
 const trustItems = [
 {
 icon: (
 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
 </svg>
 ),
 text: "Instant WhatsApp Booking"
 },
 {
 icon: (
 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
 </svg>
 ),
 text: "Verified Clean Vehicles"
 },
 {
 icon: (
 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
 </svg>
 ),
 text: "5-Min Response Time"
 }
 ];

 return (
 <section className="py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-emerald-500">
 <div className="container mx-auto px-4">
 <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-8">
 {trustItems.map((item, index) => (
 <div key={index} className="flex items-center gap-1.5 sm:gap-2 text-white">
 <span className="flex-shrink-0">{item.icon}</span>
 <span className="text-xs sm:text-sm font-medium">{item.text}</span>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
