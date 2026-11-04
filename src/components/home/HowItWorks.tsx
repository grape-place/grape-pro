import Icon from '../ui/Icon'

const steps = [
  { title: 'Register', description: 'Choose one of our upcoming online networking sessions.' },
  { title: 'Connect', description: 'Meet other professionals in small breakout rooms and enjoy meaningful conversations.' },
  { title: 'Rotate', description: 'Move into new breakout rooms and meet more people.' },
]

export default function HowItWorks() {
  return <section id="how-it-works" className="section how-section container" aria-labelledby="how-heading">
    <div className="section-heading"><h2 id="how-heading">How Grape works</h2></div>
    <ol className="steps-grid grid md:grid-cols-3">
      {steps.map((step, index) => <li className="step" key={step.title}>
        <div className="step-top"><span className="step-number">{index + 1}</span>{index < 2 && <Icon name="arrow" className="step-arrow" />}</div>
        <h3>{step.title}</h3><p>{step.description}</p>
      </li>)}
    </ol>
  </section>
}
