export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-16 overflow-hidden"
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#7C3AED 1px, transparent 1px), linear-gradient(90deg, #7C3AED 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-tk-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full">
        {/* Genre tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['Afrobeats', 'Amapiano', 'Trap', 'Open Format'].map(genre => (
            <span
              key={genre}
              className="text-xs text-tk-muted border border-tk-border px-3 py-1 tracking-widest uppercase font-body"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Hook line */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] text-tk-text leading-none tracking-wide mb-4">
          YOU DON'T WANT 100,
          <br />
          <span className="text-tk-accent">YOU WANT TENKAY.</span>
        </h1>

        {/* Tagline */}
        <p className="font-body text-tk-muted text-base md:text-lg tracking-widest uppercase mt-6 mb-10">
          Open-format.&nbsp;&nbsp;Every genre.&nbsp;&nbsp;Every room.&nbsp;&nbsp;One name.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#book"
            className="inline-block bg-tk-accent hover:bg-tk-accent-hover text-white font-body font-medium text-sm px-8 py-4 tracking-widest uppercase transition-colors duration-200"
          >
            Book DJ Tenkay
          </a>
          <a
            href="#music"
            className="inline-block border border-tk-border hover:border-tk-muted text-tk-muted hover:text-tk-text font-body font-medium text-sm px-8 py-4 tracking-widest uppercase transition-colors duration-200"
          >
            Hear the Mixes
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-6 mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tk-muted hover:text-tk-text text-xs tracking-widest uppercase font-body transition-colors"
          >
            Instagram
          </a>
          <span className="text-tk-border">|</span>
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-tk-muted">
        <span className="text-xs tracking-widest uppercase font-body">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-tk-muted to-transparent" />
      </div>
    </section>
  )
}
