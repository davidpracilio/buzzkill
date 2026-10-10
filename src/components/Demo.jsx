import { useState } from 'react'

const INITIAL_NOTIFICATIONS = [
  { id: 1, app: 'Chat', text: 'Sam: lunch?', muted: false },
  { id: 2, app: 'Email', text: 'Your weekly newsletter is here', muted: true },
  { id: 3, app: 'Calendar', text: 'Stand-up in 10 minutes', muted: false },
  { id: 4, app: 'Social', text: '14 people liked your post', muted: true },
  { id: 5, app: 'Shopping', text: 'Flash sale ends tonight!', muted: false },
]

const FILTERS = ['all', 'active', 'muted']

function Demo() {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS)
  const [filter, setFilter] = useState('all')

  const mutedCount = notifications.filter((n) => n.muted).length
  const visible = notifications.filter((n) => {
    if (filter === 'active') return !n.muted
    if (filter === 'muted') return n.muted
    return true
  })

  const toggleMuted = (id) => {
    setNotifications((current) =>
      current.map((n) => (n.id === id ? { ...n, muted: !n.muted } : n)),
    )
  }

  const setAllMuted = (muted) => {
    setNotifications((current) => current.map((n) => ({ ...n, muted })))
  }

  return (
    <section id="demo" className="section">
      <h2>Try it</h2>
      <p className="section-lead">
        Mute the noise below. {mutedCount} of {notifications.length} notifications silenced.
      </p>

      <div className="demo">
        <div className="demo-toolbar">
          <div className="tabs" role="group" aria-label="Filter notifications">
            {FILTERS.map((name) => (
              <button
                key={name}
                type="button"
                className="tab"
                aria-pressed={filter === name}
                onClick={() => setFilter(name)}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="demo-actions">
            <button type="button" className="btn btn-ghost" onClick={() => setAllMuted(false)}>
              Unmute all
            </button>
            <button type="button" className="btn btn-primary" onClick={() => setAllMuted(true)}>
              Mute all
            </button>
          </div>
        </div>

        <ul className="notifications">
          {visible.map((n) => (
            <li key={n.id} className={n.muted ? 'notification is-muted' : 'notification'}>
              <div>
                <strong>{n.app}</strong>
                <p>{n.text}</p>
              </div>
              <button
                type="button"
                className="btn btn-ghost"
                aria-pressed={n.muted}
                onClick={() => toggleMuted(n.id)}
              >
                {n.muted ? '🔕 Muted' : '🔔 Mute'}
              </button>
            </li>
          ))}
          {visible.length === 0 && <li className="empty">Nothing here.</li>}
        </ul>
      </div>
    </section>
  )
}

export default Demo
