function Contact() {
  return (
    // <div>
    //   <h2>Contact</h2>
    //   <p>Email: admin@kikuyacoffee.com</p>
    // </div>
    <section id="contact" className="py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
          Contact Me
      </h2>
      <div className="mx-6 bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
        {/* <h2 className="text-2xl text-gray-700 text-center leading-relaxed font-bold mb-4">
          Contact Details
        </h2> */}
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          Email:  <a href="mailto:adithyarodrigo22@gmail.com" className="text-purple-500 hover:underline">
             adithyarodrigo22@gmail.com
          </a>
        </p>
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          Contact Number:  <span className="text-purple-500 hover:underline">
             0766251822
          </span>
        </p>
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          LinkedIn:  <a href="https://www.linkedin.com/in/oshada-rodrigo-53260a209/?skipRedirect=true" target="_blank" className="text-blue-500 hover:underline">
             Oshada Rodrigo LinkedIn
          </a>
        </p>
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          GitHub:  <a href="https://github.com/AdithyaRodrigo" target="_blank" className="text-gray-500 hover:underline">
             Oshada Rodrigo GitHub
          </a>
        </p>
      </div>

    </section>
  )
}

export default Contact
