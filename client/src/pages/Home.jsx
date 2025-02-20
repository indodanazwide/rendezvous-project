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
            
                <a href="mailto:janev@dut.ac.za" className="cta-button">Reserve Your Table</a>
                
                <aside>
                    <p>Steve Biko Campus, Block S9, Level 4</p>
                </aside>
            </article>
        </section>
    </div>
  )
}

export default Home