function About() {
  return (
    // <div>
    //   <h2>About Me</h2>
    //   <p>I am a software developer with experience in building full-stack applications...</p>
    // </div>
    <section id="about" className="py-20">
      <h2 className="text-4xl font-bold mb-6 text-white text-center mb-12">
          About Me
        </h2>
        <div className="mx-6 bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            I am a Software Engineering graduate with experience in
            backend development, cloud services, and modern web
            technologies such as React and Node.js.
          </p>
        </div>
        

    </section>
  )
}

export default About
