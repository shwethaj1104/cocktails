import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
        <Link className="navbar-cocktail" to="/cocktail">Cocktails</Link>
        <Link className="navbar-home" to="/home">Home</Link>
    </nav>
  )
}

export default Navbar