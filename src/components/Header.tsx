//import { Link } from "react-router-dom"
import "../css/Header.css"

function NavBar(){
    return(
        // <header className="navbar">
        //     <div className="navbar__logo">
        //         Oshada
        //     </div>
        //     <nav className="navbar__links">
        //         <Link to='/'>Home</Link>
        //         <Link to='/about'>About</Link>
        //         <Link to='/projects'>Projects</Link>
        //         <Link to='/contact'>Contact</Link>
        //     </nav>
        // </header>
        <nav className="fixed top-0 w-full bg-primary-200 shadow-lg z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-gray-500">

                <h1 className="text-xl font-bold">Oshada.dev</h1>

                <div className="flex gap-6 font-medium">
                {/* <Link className="hover:text-purple-500 transition" to="/">Home</Link>
                <Link className="hover:text-purple-500 transition" to="/about">About</Link>
                <Link className="hover:text-purple-500 transition" to="/projects">Projects</Link>
                <Link className="hover:text-purple-500 transition" to="/contact">Contact</Link> */}
                    <a href="#hero" className="hover:text-purple-200">Home</a>
                    <a href="#about" className="hover:text-purple-200">About</a>
                    <a href="#projects" className="hover:text-purple-200">Projects</a>
                    <a href="#contact" className="hover:text-purple-200">Contact</a>
                </div>

            </div>
        </nav>
    )
    
}
export default NavBar;