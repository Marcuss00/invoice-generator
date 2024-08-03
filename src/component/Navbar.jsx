import Logo from "../icons/logo";
import { NavLink } from "react-router-dom";
const Navbar = () => {

  const linkClass = ({isActive})=> isActive ? 
  'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2':
  'text-white hover:bg-gray-900  hover:text-white rounded-md px-3 py-2'; 
  return (
    <nav className="bg-indigo-600">
      <div className="flex items-center justify-between w-full">
        <div >
        <NavLink className="w-36 h-auto flex" to="/">
        <Logo />
      </NavLink>
        </div>
        <div className="flex space-x-2 text-white pr-4 sm:pr-24">
        <NavLink to="/" className={linkClass}>Home</NavLink>

        <NavLink to="/about" className={linkClass}>About</NavLink>

        <NavLink to="new" className={linkClass}>New</NavLink>
      </div>
      </div>
      

     
    </nav>
  );
};

export default Navbar;
