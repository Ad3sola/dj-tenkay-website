export default function Footer() {
  return (
    <footer className="border-t border-tk-border px-6 md:px-16 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl text-tk-text tracking-widest">DJ TENKAY</span>

        <p className="text-tk-muted text-xs font-body tracking-wider text-center">
          Open-format. Every genre. Every room. One name.
        </p>

        <div className="flex gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tk-muted hover:text-tk-text text-xs tracking-widest uppercase font-body transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tk-muted hover:text-tk-text text-xs tracking-widest uppercase font-body transition-colors"
          >
            TikTok
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-tk-border text-center">
        <p className="text-tk-muted text-xs font-body">
          © {new Date().getFullYear()} DJ Tenkay. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
