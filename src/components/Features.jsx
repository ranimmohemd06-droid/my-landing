import Card from './Card'

const features = [
  {
    image: '/images/equipment.svg',
    title: 'Modern Equipment',
    text: 'Free weights, machines and cardio gear cleaned every day.',
  },
  {
    image: '/images/coach.svg',
    title: 'Expert Coaches',
    text: 'Certified trainers build a plan around your goals.',
  },
  {
    image: '/images/classes.svg',
    title: 'Group Classes',
    text: 'Yoga, HIIT and spinning classes that keep you motivated.',
  },
]

function Features() {
  return (
    <section id="features" className="section">
      <h2>Our Features</h2>
      <div className="cards">
        {features.map((item) => (
          <Card
            key={item.title}
            image={item.image}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </section>
  )
}

export default Features
