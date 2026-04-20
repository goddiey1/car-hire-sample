export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-neutral-950 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
        <p>© {new Date().getFullYear()} Godfrey Hire.org. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
