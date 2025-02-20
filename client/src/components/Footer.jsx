
const Footer = () => {
  return (
    <footer>
        <section className="footer">
            <article className="about">
                <h3>About Us</h3>

                <p>
                Rendezvous Restaurant, located within Durban University of Technology (DUT), is a premier dining establishment operated by our talented culinary students. We offer a unique fusion of contemporary and traditional dishes, providing a practical training ground for future chefs and a delightful experience for our guests.
                </p>
            </article>

            <article className="contact">
                <h3>Contact</h3>
                <p>- Steve Biko Campus, Block S9, Level 4, Durban University of Technology, Durban, South Africa</p>
                <p>- +27 31 373 1234</p>
                <p>- rendezvous@dut.ac.za</p>
            </article>

            <article className="feedback">
                <h3>Feedback</h3>
                <form action="">

                </form>
                <p>We value your feedback to enhance our services. Please share your dining experience or suggestions </p>
            </article>
        </section>

        <hr />

        <section className="copyrights">
            <p>&copy; { new Date().getFullYear() } Rendezvous Restaurant. All Rights Reserved.</p>
        </section>
    </footer>
  )
}

export default Footer