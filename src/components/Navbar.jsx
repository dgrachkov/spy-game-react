import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar w-full py-4 px-2 border-b border-b-zinc-800">
      <div className="flex justify-center items-center">
        <Link to='/' className="flex items-center cursor-pointer">
          <img src="./spy-logo.svg" alt="Шпион" className="w-12 h-12 sm:w-[55px] sm:h-[55px]"/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar