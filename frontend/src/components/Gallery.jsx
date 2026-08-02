import { useState, useEffect, useCallback } from 'react'

const media = [
  {
    type: 'image',
    file: '/assets/gallery/100_2040.jpeg',
    event: 'Private Event',
    label: 'Behind the Decks',
  },
  {
    type: 'image',
    file: '/assets/gallery/DSC05062.jpeg',
    event: "CSTAT Weekend '26",
    label: 'Behind the Decks',
  },
  {
    type: 'video',
    file: '/assets/gallery/TTU_spring_fest_mix.mp4',
    event: 'Texas Tech Springfest',
    label: 'Springfest Mix',
  },
  {
    type: 'video',
    file: '/assets/gallery/E488DACC-7FFB-4867-81BA-0623E7502BE6.mp4',
    event: "LOTP — Control the Traffic",
    label: "TXST Homecoming '25",
  },
  {
    type: 'video',
    file: '/assets/gallery/476b1a3880764ff7a6e74015941cd02d.mov',
    event: 'DJ Tenkay & OG Boyz',
    label: "Riverfest Afterparty '25",
  },
  {
    type: 'video',
    file: '/assets/gallery/B168F038-715A-4F49-876B-59AB147D4305.mp4',
    event: 'OG Boyz',
    label: "Spooky House Halloween Party",
  },
  {
    type: 'video',
    file: '/assets/gallery/3405DFC0-0997-44BB-8CA6-6863B9F2A9D0.mp4',
    event: 'OG Boyz',
    label: "Spooky House Halloween Party",
  },
  {
    type: 'video',
    file: '/assets/gallery/copy_35EE0BC9-3D29-4DB9-A1A9-83E63E50A1B9.mov',
    event: 'Double00 Entertainment',
    label: "Calm Down H-Town — Rema Weekend '25",
  },
  {
    type: 'video',
    file: '/assets/gallery/234935D3-FDC0-4AFB-B6B1-69E5ED7C8780.mov',
    event: 'Double00 Entertainment',
    label: "Calm Down H-Town — Rema Weekend '25",
  },
  {
    type: 'video',
    file: '/assets/gallery/100_2105.mov',
    event: 'Double00 Entertainment',
    label: "H2-Double 0 Pool Party",
  },
  {
    type: 'video',
    file: '/assets/gallery/IMG_1829.mov',
    event: 'Private Event',
    label: "Rep Your Flag Pool Party",
  },
  {
    type: 'video',
    file: '/assets/gallery/IMG_6522.mov',
    event: 'Diversum Entertainment',
    label: "$$$4U RNB Party",
  },
  {
    type: 'video',
    file: '/assets/gallery/7C649B85-8996-4ADA-B157-3B400C53ED7D.mov',
    event: 'TTU Date Auction Weekend',
    label: "Date Auction Weekend '25",
  },
  {
    type: 'video',
    file: '/assets/gallery/06837D26-6742-4DC8-B556-BF93EF79BED4.mov',
    event: 'TTU Date Auction Weekend',
    label: "Date Auction Weekend '25",
  },
]

const featuredPhotos = [
  { file: '/assets/gallery/100_2040.jpeg', event: 'Private Event' },
  { file: '/assets/gallery/DSC05062.jpeg', event: "CSTAT Weekend '26" },
]

function Modal({ index, onClose, onPrev, onNext }) {
  const item = media[index]
  const hasPrev = index > 0
  const hasNext = index < media.length - 1

  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft' && hasPrev) onPrev()
    if (e.key === 'ArrowRight' && hasNext) onNext()
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-tk-accent text-xs tracking-widest uppercase font-body">{item.event}</p>
            <p className="text-tk-text font-body text-sm font-medium">{item.label}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-tk-muted text-xs font-body tracking-widest">
              {index + 1} / {media.length}
            </span>
            <button
              onClick={onClose}
              className="text-tk-muted hover:text-tk-text text-sm font-body tracking-widest uppercase transition-colors"
            >
              ✕ Close
            </button>
          </div>
        </div>

        <div className="relative">
          {item.type === 'video' ? (
            <video
              key={item.file}
              src={item.file}
              autoPlay
              controls
              className="w-full max-h-[72vh] object-contain bg-black"
            />
          ) : (
            <img
              src={item.file}
              alt={item.label}
              className="w-full max-h-[72vh] object-contain bg-black"
            />
          )}

          {hasPrev && (
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-tk-black/80 hover:bg-tk-accent border border-tk-border w-10 h-10 flex items-center justify-center text-tk-text text-xl transition-colors duration-200"
            >
              ‹
            </button>
          )}
          {hasNext && (
            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-tk-black/80 hover:bg-tk-accent border border-tk-border w-10 h-10 flex items-center justify-center text-tk-text text-xl transition-colors duration-200"
            >
              ›
            </button>
          )}
        </div>

        <p className="text-tk-muted text-xs font-body tracking-widest text-center mt-3">
          ← → arrow keys to navigate &nbsp;·&nbsp; ESC to close
        </p>
      </div>
    </div>
  )
}

function MediaCard({ item, onClick }) {
  return (
    <div
      className="relative overflow-hidden bg-tk-surface border border-tk-border group cursor-pointer aspect-square"
      onClick={onClick}
    >
      {item.type === 'image' ? (
        <img
          src={item.file}
          alt={item.label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <video
          src={item.file}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-tk-black/90 via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-tk-accent text-xs tracking-widest uppercase font-body mb-1">{item.event}</p>
        <p className="text-tk-text font-body text-sm font-medium">{item.label}</p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-tk-black/70 rounded-full w-14 h-14 flex items-center justify-center border border-tk-border">
          <span className="text-tk-text text-xl">{item.type === 'video' ? '▶' : '🔍'}</span>
        </div>
      </div>
    </div>
  )
}

function FeaturedCarousel({ onOpen }) {
  const [current, setCurrent] = useState(0)

  // Auto-cycle every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % featuredPhotos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const photo = featuredPhotos[current]

  return (
    <div
      className="relative overflow-hidden bg-tk-surface border border-tk-border group cursor-pointer aspect-[16/9] mb-3"
      onClick={() => onOpen(current)}
    >
      {featuredPhotos.map((p, i) => (
        <img
          key={p.file}
          src={p.file}
          alt="Behind the Decks"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:scale-105 transition-transform duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-tk-black/90 via-transparent to-transparent" />

      {/* Title — always "Behind the Decks" */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-tk-accent text-xs tracking-widest uppercase font-body mb-1">{photo.event}</p>
        <p className="text-tk-text font-body text-lg font-medium">Behind the Decks</p>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 right-6 flex gap-2">
        {featuredPhotos.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i === current ? 'bg-tk-accent' : 'bg-tk-muted'
            }`}
          />
        ))}
      </div>

      {/* Hover icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-tk-black/70 rounded-full w-16 h-16 flex items-center justify-center border border-tk-border">
          <span className="text-tk-text text-2xl">🔍</span>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const handlePrev = useCallback(() => {
    setSelectedIndex(i => (i > 0 ? i - 1 : i))
  }, [])

  const handleNext = useCallback(() => {
    setSelectedIndex(i => (i < media.length - 1 ? i + 1 : i))
  }, [])

  return (
    <section id="gallery" className="py-24 px-6 md:px-16 border-t border-tk-border">
      <div className="max-w-6xl mx-auto">

        <p className="text-tk-muted text-xs tracking-widest uppercase font-body mb-4">
          03 — Gallery
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <h2 className="font-display text-5xl md:text-7xl text-tk-text leading-none">
            EVERY ROOM.<br />
            <span className="text-tk-accent">EVERY VIBE.</span>
          </h2>
          <p className="text-tk-muted font-body text-sm max-w-xs md:text-right hidden md:block">
            From Halloween parties to college homecoming — DJ Tenkay shows up and delivers every time.
          </p>
        </div>

        {/* Featured carousel */}
        <FeaturedCarousel onOpen={setSelectedIndex} />

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {media.slice(2).map((item, i) => (
            <MediaCard key={i} item={item} onClick={() => setSelectedIndex(i + 2)} />
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-tk-border pt-8">
          <p className="text-tk-muted font-body text-sm">
            Want DJ Tenkay at your next event?
          </p>
          <a
            href="#book"
            className="bg-tk-accent hover:bg-tk-accent-hover text-white font-body text-sm font-medium px-8 py-4 tracking-widest uppercase transition-colors duration-200"
          >
            Book Now
          </a>
        </div>
      </div>

      {selectedIndex !== null && (
        <Modal
          index={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  )
}
