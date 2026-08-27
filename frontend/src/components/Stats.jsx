import { useState, useEffect } from 'react'

export default function Stats() {
  const [totalBookings, setTotalBookings] = useState(null)

  useEffect(() => {
    fetch('https://dj-tenkay-website-production.up.railway.app/stats')
      .then(res => res.json())
      .then(data => setTotalBookings(data.total_bookings))
      .catch(() => setTotalBookings(null))
  }, [])

  const stats = [
    { value: '2+', label: 'Years DJing' },
    { value: '50+', label: 'Events Performed' },
    { value: 'ATX / DFW', label: 'Based In' },
    {
      value: totalBookings !== null ? `${totalBookings}` : '—',
      label: 'Booking Requests',
      live: true,
    },
  ]

  return (
    <section className="border-t border-b border-tk-border">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-tk-border">
        {stats.map(({ value, label, live }) => (
          <div key={label} className="bg-tk-black px-8 py-10 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <p className="font-display text-4xl md:text-5xl text-tk-accent">
                {value}
              </p>
              {live && totalBookings !== null && (
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-500 text-xs font-body tracking-widest uppercase">
                    Live
                  </span>
                </span>
              )}
            </div>
            <p className="text-tk-muted text-xs tracking-widest uppercase font-body">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}