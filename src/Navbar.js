import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
           <h1 className="logo">Cats4Lyfe</h1>  
           <div className="links">
               <Link to="/cats4lyfe">Home</Link>
               <Link to="/Basket">Basket</Link>
           </div>

        </nav>
    )

}

export default Navbar;