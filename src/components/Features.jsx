const FEATURES = [
  {
    icon: '🔕',
    title: 'Smart muting',
    body: 'Silence the apps that interrupt you most, automatically, while the important stuff still gets through.',
  },
  {
    icon: '⏱️',
    title: 'Focus sessions',
    body: 'Start a timed session and hold every notification until you come up for air.',
  },
  {
    icon: '📬',
    title: 'Daily digest',
    body: 'Everything you missed, grouped and summarised into one calm update.',
  },
]

function Features() {
  return (
    <section id="features" className="section">
      <h2>Less buzz, more done</h2>
      <p className="section-lead">Three small tools that give you your attention back.</p>
      <div className="grid">
        {FEATURES.map((feature) => (
          <article key={feature.title} className="card">
            <span className="card-icon" aria-hidden="true">
              {feature.icon}
            </span>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features
