export default function Footer() {
 return (
 <footer className="w-full border-t border-neutral-900/10 bg-[#c5e6cb]/50 py-6 sm:py-8 transition-colors duration-300">
 <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-neutral-600 ">
 <p className="text-center md:text-left">© {new Date().getFullYear()} Godfrey Hire. All rights reserved.</p>
 <div className="flex items-center gap-4 sm:gap-6">
 <a href="#" className="hover:text-neutral-900 transition-colors focus:outline-none focus:text-neutral-900 ">Terms</a>
 <a href="#" className="hover:text-neutral-900 transition-colors focus:outline-none focus:text-neutral-900 ">Privacy</a>
 </div>
 </div>
 </footer>
 );
}
