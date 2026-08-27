export default function About() {
  const stats = [
    { value: '2+', label: 'Years DJing' },
    { value: '50+', label: 'Events' },
    { value: 'ATX / DFW', label: 'Based In' },
    { value: '∞', label: 'Genres' },
  ]

  const highlights = [
    { event: 'Texas ASA Weekend', year: "'25", location: 'Texas' },
    { event: 'Antiqs & TTYB Event', year: "'25", location: 'Baltimore, MD' },
    { event: 'Texas State Welcome Week', year: 'Recurring', location: 'San Marcos, TX' },
    { event: 'Texas State Springfest', year: 'Recurring', location: 'San Marcos, TX' },
    { event: 'Texas State Homecoming', year: 'Recurring', location: 'San Marcos, TX' },
    { event: 'RNB Nights', year: 'Recurring', location: 'Texas' },
    { event: 'Viral TikTok Mixes', year: 'Ongoing', location: 'Worldwide' },
  ]

  return (
    <section id="about" className="py-24 px-6 md:px-16 border-t border-tk-border">
      <div className="max-w-6xl mx-auto">

        <p className="text-tk-muted text-xs tracking-widest uppercase font-body mb-4">
          01 — About
        </p>

        <h2 className="font-display text-5xl md:text-7xl text-tk-text mb-16 leading-none">
          THE DJ BEHIND<br />
          <span className="text-tk-accent">THE NAME.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left — Photo + stats */}
          <div className="flex flex-col gap-8">
            <div className="w-full aspect-[3/4] bg-tk-surface border border-tk-border overflow-hidden relative">
              <img
                src="/assets/IMG_8517.jpeg"
                alt="DJ Tenkay"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tk-black/60 to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-px bg-tk-border">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-tk-black p-6">
                  <p className="font-display text-4xl text-tk-accent mb-1">{value}</p>
                  <p className="text-tk-muted text-xs tracking-widest uppercase font-body">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Bio + highlights */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <p className="text-tk-text font-body text-lg leading-relaxed">
                DJ Tenkay is an open-format DJ based in Dallas/Austin, Texas —
                bringing high-energy, culture-forward sets to every room he touches.
                Introduced to DJing by a friend, Tenkay's real driver is his passion
                for music and his ability to curate an environment where everyone
                can share in the same vibe.
              </p>
              <p className="text-tk-muted font-body text-base leading-relaxed">
                Specializing in Afrobeats, Amapiano, and Hip Hop — but never limited
                to them. A DJ Tenkay set means you won't know what's coming next,
                but you already know it's going to sound amazing. His music selection
                is what sets him apart, and the crowd always feels it.
              </p>
              <p className="text-tk-muted font-body text-base leading-relaxed">
                From major conference stages to intimate private parties, Tenkay
                has built a reputation for reading the room and delivering every time.
                Open to travel — because great music has no zip code.
              </p>
            </div>

            <div>
              <p className="text-tk-muted text-xs tracking-widest uppercase font-body mb-6">
                Notable Events
              </p>
              <div className="flex flex-col gap-px bg-tk-border">
                {highlights.map(({ event, year, location }) => (
                  <div
                    key={event}
                    className="bg-tk-black px-4 py-4 flex items-center justify-between hover:bg-tk-surface transition-colors duration-200"
                  >
                    <div>
                      <p className="text-tk-text font-body text-sm font-medium">{event}</p>
                      <p className="text-tk-muted font-body text-xs tracking-wide mt-0.5">{location}</p>
                    </div>
                    <span className="text-tk-muted text-xs font-body tracking-widest">{year}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#book"
              className="inline-block border border-tk-accent text-tk-accent hover:bg-tk-accent hover:text-white font-body text-sm font-medium px-8 py-4 tracking-widest uppercase transition-all duration-200 self-start"
            >
              Book DJ Tenkay
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
