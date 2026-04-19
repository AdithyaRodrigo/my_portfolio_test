'use client';
import { useNavigate } from "react-router-dom";
function Home() {
  
  return (
    // <div>
    //   <h1>Oshada Rodrigo</h1>
    //   <p>Software Engineer</p>
    //   <p>Welcome to my portfolio</p>
    //   {/* <div className="mb-4 text-4xl font-mono font-bold">Hello World</div> */}
    // </div>
    
    <div id="hero" className="mt-15 py-15 text-white">

        <div className="text-center max-w-xl mx-auto">

          <h1 className="text-5xl font-bold mb-6">
            Hi, I'm Oshada 👋
          </h1>

          <p className="text-lg opacity-90 mb-8">
            Software Engineer passionate about building modern web applications.
          </p>

          {/* <button onClick={() => navigate('/projects')} className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
            View My Projects
          </button> */}
          <button onClick={() => window.location.href = '#projects'} className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
            View My Projects
          </button>

        </div>

      </div>
    
    )
}

export default Home
