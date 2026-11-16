import { useState } from 'react'

function Contact() {
  const [joined, setJoined] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setJoined(true)
  }

  return (
    <section id="contact" className="section">
      <h2>Ready to start?</h2>
      <p>Join today and get your first week for free.</p>

      {joined ? (
        <p className="thanks">Thanks for joining! We will contact you soon.</p>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message" rows="4"></textarea>
          <button className="button" type="submit">
            Join now
          </button>
        </form>
      )}
    </section>
  )
}

export default Contact
