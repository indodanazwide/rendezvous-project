import '../assets/sass/homepage.scss'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
          <article className="hero-image"></article>
          
          <article className="hero-intro">
              <h1>Rendezvous</h1>
          
              <p>Experience Culinary Excellence </p>
              <p>Where future chefs craft delightful dishes</p>          
          </article>
      </section>

      <section className="about">
        <article className="about-us">
          <h2>About Us</h2>
          
          <p>
            Established in 1984, Rendezvous Restaurant is a student-run establishment at DUT,
            offering quality meals and hands-on training for future culinary professionals.
          </p>
          
          <p>Committed to sustainability and excellence in culinary arts.</p>
        </article>

        <article className="about-image"></article>
      </section>

      <section className="menu">
        <h2>Menu</h2>

        <article className="menu-category">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </article>
      </section>
    </div>
  )
}

export default Home