export default function Music() {
  const platforms = [
    {
      name: 'YouTube',
      handle: '@ByTenkay',
      description: 'Full mixes, sets, and live recordings.',
      url: 'https://www.youtube.com/@ByTenkay',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'TikTok',
      handle: '@toy.yay',
      description: 'Short mixes, viral moments, and behind the scenes.',
      url: 'https://www.tiktok.com/@toy.yay',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="music" className="py-24 px-6 md:px-16 border-t border-tk-border">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <p className="text-tk-muted text-xs tracking-widest uppercase font-body mb-4">
          02 — Music
        </p>

        {/* Heading */}
        <h2 className="font-display text-5xl md:text-7xl text-tk-text mb-4 leading-none">
          FEEL THE<br />
          <span className="text-tk-accent">SELECTION.</span>
        </h2>

        <p className="text-tk-muted font-body text-base mb-16 max-w-xl">
          You won't know what's coming next — but it's always going to sound amazing.
          Follow along to catch every mix as it drops.
        </p>

        {/* Coming soon featured mix area */}
        <div className="w-full bg-tk-surface border border-tk-border p-12 flex flex-col items-center justify-center text-center mb-12 relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tk-accent/10 rounded-full blur-3xl pointer-events-none" />

          {/* Fake waveform */}
          <div className="flex items-end gap-1 mb-8 h-16 relative z-10">
            {[3,6,9,14,10,16,8,12,5,18,11,7,15,9,13,6,10,4,8,12,7,15,9,11,6].map((h, i) => (
              <div
                key={i}
                className="w-1.5 bg-tk-accent/40 rounded-full"
                style={{ height: `${h * 3}px` }}
              />
            ))}
          </div>

          <p className="font-display text-3xl text-tk-text mb-2 relative z-10">
            MIXES DROPPING SOON
          </p>
          <p className="text-tk-muted text-sm font-body tracking-wider relative z-10">
            Follow on YouTube and TikTok to be the first to hear them.
          </p>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-tk-border">
          {platforms.map(({ name, handle, description, url, icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tk-black p-8 flex flex-col gap-4 group hover:bg-tk-surface transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-tk-accent">{icon}</span>
                  <span className="font-display text-2xl text-tk-text">{name}</span>
                </div>
                <span className="text-tk-muted text-xs tracking-widest uppercase font-body group-hover:text-tk-accent transition-colors">
                  Follow →
                </span>
              </div>
              <p className="text-tk-muted text-xs tracking-widest font-body">{handle}</p>
              <p className="text-tk-muted font-body text-sm leading-relaxed">{description}</p>
            </a>
          ))}
        </div>

        {/* Genres */}
        <div className="mt-12">
          <p className="text-tk-muted text-xs tracking-widest uppercase font-body mb-6">
            What You'll Hear
          </p>
          <div className="flex flex-wrap gap-3">
            {['Afrobeats', 'Amapiano', 'Hip Hop', 'R&B', 'Pop', 'House', 'Open Format'].map(genre => (
              <span
                key={genre}
                className="border border-tk-border text-tk-muted text-xs px-4 py-2 tracking-widest uppercase font-body hover:border-tk-accent hover:text-tk-accent transition-colors duration-200 cursor-default"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
