import { useState } from "react";
import "./App.css";

const socialLinks = [
  {
    name: "email",
    link: "mailto:kenneth.cringe@gmail.com",
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/rougekiing",
  },
  {
    name: "twitter",
    link: "https://www.twitter.com/kennethdera",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/kenneth",
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/ken",
  },
];

const testimonials = [
  {
    id: "001",
    image: "./imgs/testimonial-2.jpg",
    name: "Emily Reb",
    contact: "kenneth.cringe@gmail.com",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.",
  },
  {
    id: "002",
    image: "./imgs/testimonial-1.jpg",
    name: "Emily Reb",
    contact: "kenneth.cringe@gmail.com",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.",
  },
];


const projects = [
  {
    id: "001",
    image: "./imgs/folio-2.jpg",
    title: "Old School Party",
    subtitle: "Online Ticket Sale",
    link: "https://web.whatsapp.com",
    info: "This was a website where users buy different packages of tickets for an event. The App was created in React JS,React Hooks.Paystack was used as the payment integration, app was hosted on Netlify",
  },
  {
    id: "002",
    image: "./imgs/folio-1.jpg",
    title: "Errander",
    subtitle: "Indipendent Services",
    link: "https://web.whatsapp.com",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium neque numquam mollitia modi quasi distinctio.",
  },
];

const services = [
  {
    id: "001",
    image: "./imgs/pencil-case.svg",
    title: "Logo Design",
    subtext:
      "Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.",
  },
  {
    id: "002",
    image: "./imgs/responsive.svg",
    title: "Logo Design",
    subtext:
      "Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.",
  },
];

function App() {
  const [modal, setModal] = useState(false);
  function toggleModal() {
    setModal(!modal);
  }
  return (
    <>
      <Header />
      <About />
      <Services />
      <Projects />
      <Contact modal={modal} toggleModal={toggleModal} />
      {!modal || <ContactForm />}
      {/*Is this even neccessary*/}
      {testimonials && <Testimonial />}
    </>
  );
}

function Header() {
  return (
    <header id="home" className="header">
      <div className="overlay"></div>
      <div className="header-content container">
        <h1 className="header-title">
          <span className="up">Hello!</span>
          <span className="down">I am Kenneth Chidera</span>
        </h1>
        <p className="header-subtitle">WEB DESIGNER/DEVELOPER</p>

        <a href="#blog" className="btn btn-primary">
          Visit My Works
        </a>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="section pt-0" id="about">
      {/* container */}
      <div className="container text-center">
        {/* about wrapper */}
        <div className="about">
          <div className="about-img-holder">
            <img
              src="./imgs/man.png"
              className="about-img"
              alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
            />
          </div>
          <div className="about-caption">
            <p className="section-subtitle">Who Am I ?</p>
            <h2 className="section-title mb-3">About Me</h2>
            <p>
              As a well-disciplined, enthusiastic, and passionate
              individual who has developed an attitude that enables
              him to make positive impact by assiduously going extra
              miles to help transform other individuals, I am a
              computer enthusiast a who has skills ranging from
              professional graphics and web designing, 3-D Modeling
              and programming, and a hobby of building desktop PCs.
            </p>

            <a
              href="./Resume.pdf"
              className="btn-rounded btn btn-outline-primary mt-4"
            >
              Download CV
            </a>
            <div className="footer">
              <div className="social-links text-left m-auto ml-sm-auto">
                {socialLinks.map((link) => (
                  <a href={link.link} className="link">
                    <i className={"ti-" + link.name}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* end of about wrapper */}
      </div>
      {/* end of container */}
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="service">
      <div className="container text-center">
        <p className="section-subtitle">What I Do ?</p>
        <h6 className="section-title mb-6">Service</h6>
        {/* row */}
        <div className="row">
          {services.map((service) => (
            <div className="col-md-6 col-lg-3" key={service.id}>
              <div className="service-card">
                <div className="body">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="icon"
                  />
                  <h6 className="title">{service.title}</h6>
                  <p className="subtitle">{service.subtext}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* end of row */}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="blog">
      {/*container */}
      <div className="container text-center">
        <p className="section-subtitle">Projects I have worked on</p>
        <h6 className="section-title mb-6">Portfolio</h6>
        {projects.map((project) => (
          <div className="blog-card"> 
            <div className="blog-card-header">
              <img
                src={project.image}
                className="blog-card-img"
                alt={project.title + ": " + project.subtitle}
              />
            </div>
            <div className="blog-card-body">
              <h5 className="blog-card-title">{project.title}</h5>

              <p className="blog-card-caption">
                <b>{project.subtitle}</b>
              </p>
              <p>{project.info}</p>

              <a href={project.link} className="blog-card-link">
                View Live <i className="ti-angle-double-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
      {/*end of container */}
    </section>
  );
}
function Contact({ modal, toggleModal }) {
  return (
    <>
      <section className="section-sm bg-primary">
        {/* container */}
        <div className="container text-center text-sm-left">
          {/* row */}
          <div className="row align-items-center">
            <div className="col-sm mb-4 mb-md-0">
              <h6 className="title text-light">
                Want to work with me?
              </h6>
              <p className="m-0 text-light">
                Always feel Free to Contact & Hire me
              </p>
            </div>
            <div className="col-sm offset-sm-2 offset-md-3">
              <button
                className="btn btn-lg my-font btn-light rounded"
                onClick={() => toggleModal()}
              >
                {modal === false ? "Contact Me" : "Close"}
              </button>
            </div>
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </section>
    </>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSumit(e) {
    e.preventDefault();

    const messageEntry = {
      name,
      email,
      message,
    };
    console.log(messageEntry);
    alert(
      "Thank You " +
        name +
        "!.\n I'll get back to you as soon as possible"
    );

    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <section className="section show fade" id="contact">
      <div className="container text-center">
        <p className="section-subtitle">How can you communicate?</p>
        <h6 className="section-title mb-5">Contact Me</h6>
        {/* contact form */}
        <form
          onSubmit={handleSumit}
          className="contact-form col-md-10 col-lg-8 m-auto"
        >
          <div className="form-row">
            <div className="form-group col-sm-6">
              <input
                type="text"
                size="50"
                className="form-control"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group col-sm-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                requried
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group col-sm-12">
              <textarea
                name="comment"
                id="comment"
                rows="6"
                className="form-control"
                placeholder="Write Something"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group col-sm-12 mt-3">
              <input
                type="submit"
                value="Send Message"
                className="btn btn-outline-primary rounded"
              />
            </div>
          </div>
        </form>
        {/* end of contact form */}
      </div>
      {/* end of container */}
    </section>
  );
}

function Testimonial() {
  return (
    <section className="section" id="testmonial">
      <div className="container text-center">
        <p className="section-subtitle">
          What Think Client About Me ?
        </p>
        <h6 className="section-title mb-6">Testmonial</h6>

        {/* row */}
        <div className="row">
          {testimonials.map((testimonial) => (
            <div className="col-md-6" key={testimonial.id}>
              <div className="testimonial-card">
                <div className="testimonial-card-img-holder">
                  <img
                    src={testimonial.image}
                    className="testimonial-card-img"
                    alt={testimonial.name}
                  />
                </div>
                <div className="testimonial-card-body">
                  <p className="testimonial-card-subtitle">
                    {testimonial.review}
                  </p>
                  <h6 className="testimonial-card-title">
                    {testimonial.name}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
      {/* end of container */}
    </section>
  );
}

export default App;
