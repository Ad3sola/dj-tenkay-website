import { useState } from 'react'

const eventTypes = [
  'College Event',
  'Wedding',
  'Birthday Party',
  'Pool Party',
  'Cookout',
  'Graduation Party',
  'Corporate Event',
'RNB Night',
  'Halloween Party',
  'Other',
]

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    event_type: '',
    event_date: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('http://127.0.0.1:8000/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', event_type: '', event_date: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="book" className="py-24 px-6 md:px-16 border-t border-tk-border">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <p className="text-tk-muted text-xs tracking-widest uppercase font-body mb-4">
          04 — Book
        </p>

        {/* Heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-5xl md:text-7xl text-tk-text leading-none mb-6">
              LET'S MAKE<br />
              <span className="text-tk-accent">IT HAPPEN.</span>
            </h2>
            <p className="text-tk-muted font-body text-base leading-relaxed mb-8">
              Ready to book DJ Tenkay for your next event? Fill out the form
              and I'll be in touch within 24 hours to confirm availability.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-4 border-t border-tk-border pt-8">
              <div>
                <p className="text-tk-muted text-xs tracking-widest uppercase font-body mb-1">Email</p>
                <p className="text-tk-text font-body text-sm">booking@bytenkay.com</p>
              </div>
              <div>
                <p className="text-tk-muted text-xs tracking-widest uppercase font-body mb-1">Based In</p>
                <p className="text-tk-text font-body text-sm">Dallas / Austin, TX — Open to Travel</p>
              </div>
              <div>
                <p className="text-tk-muted text-xs tracking-widest uppercase font-body mb-1">Social</p>
                <div className="flex gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                    className="text-tk-muted hover:text-tk-accent text-sm font-body transition-colors">
                    Instagram
                  </a>
                  <a href="https://tiktok.com/@toy.yay" target="_blank" rel="noopener noreferrer"
                    className="text-tk-muted hover:text-tk-accent text-sm font-body transition-colors">
                    TikTok
                  </a>
                  <a href="https://www.youtube.com/@ByTenkay" target="_blank" rel="noopener noreferrer"
                    className="text-tk-muted hover:text-tk-accent text-sm font-body transition-colors">
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-tk-surface border border-tk-border p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <p className="font-display text-4xl text-tk-accent mb-4">REQUEST SENT.</p>
                <p className="text-tk-muted font-body text-sm leading-relaxed">
                  Thanks for reaching out! Check your email for a confirmation
                  and I'll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className="mt-8 border border-tk-border text-tk-muted hover:text-tk-text text-xs tracking-widest uppercase font-body px-6 py-3 transition-colors"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name */}
                <div>
                  <label className="text-tk-muted text-xs tracking-widest uppercase font-body block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-tk-black border border-tk-border text-tk-text font-body text-sm px-4 py-3 focus:outline-none focus:border-tk-accent transition-colors placeholder:text-tk-muted/40"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-tk-muted text-xs tracking-widest uppercase font-body block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-tk-black border border-tk-border text-tk-text font-body text-sm px-4 py-3 focus:outline-none focus:border-tk-accent transition-colors placeholder:text-tk-muted/40"
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label className="text-tk-muted text-xs tracking-widest uppercase font-body block mb-2">
                    Event Type *
                  </label>
                  <select
                    name="event_type"
                    value={form.event_type}
                    onChange={handleChange}
                    required
                    className="w-full bg-tk-black border border-tk-border text-tk-text font-body text-sm px-4 py-3 focus:outline-none focus:border-tk-accent transition-colors"
                  >
                    <option value="" disabled>Select event type</option>
                    {eventTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Event Date */}
                <div>
                  <label className="text-tk-muted text-xs tracking-widest uppercase font-body block mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="event_date"
                    value={form.event_date}
                    onChange={handleChange}
                    required
                    className="w-full bg-tk-black border border-tk-border text-tk-text font-body text-sm px-4 py-3 focus:outline-none focus:border-tk-accent transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-tk-muted text-xs tracking-widest uppercase font-body block mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your event — location, expected attendance, vibe..."
                    className="w-full bg-tk-black border border-tk-border text-tk-text font-body text-sm px-4 py-3 focus:outline-none focus:border-tk-accent transition-colors placeholder:text-tk-muted/40 resize-none"
                  />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <p className="text-red-400 text-xs font-body tracking-wide">
                    Something went wrong. Please try again or email booking@bytenkay.com directly.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-tk-accent hover:bg-tk-accent-hover disabled:opacity-50 text-white font-body text-sm font-medium px-8 py-4 tracking-widest uppercase transition-colors duration-200"
                >
                  {status === 'loading' ? 'Sending...' : 'Submit Booking Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}