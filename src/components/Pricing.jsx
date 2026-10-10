const PLANS = [
  {
    name: 'Quiet',
    price: '$0',
    blurb: 'For trying it out.',
    perks: ['Mute up to 3 apps', 'One focus session a day'],
  },
  {
    name: 'Silent',
    price: '$5',
    blurb: 'For people with real work to do.',
    perks: ['Unlimited muting', 'Unlimited focus sessions', 'Daily digest'],
    featured: true,
  },
  {
    name: 'Team',
    price: '$12',
    blurb: 'Shared quiet hours for everyone.',
    perks: ['Everything in Silent', 'Team quiet hours', 'Admin controls'],
  },
]

function Pricing() {
  return (
    <section id="pricing" className="section">
      <h2>Pricing</h2>
      <p className="section-lead">Demo prices. Nothing here is actually for sale.</p>
      <div className="grid">
        {PLANS.map((plan) => (
          <article key={plan.name} className={plan.featured ? 'card is-featured' : 'card'}>
            <h3>{plan.name}</h3>
            <p className="price">
              {plan.price}
              <span>/month</span>
            </p>
            <p>{plan.blurb}</p>
            <ul className="perks">
              {plan.perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Pricing
