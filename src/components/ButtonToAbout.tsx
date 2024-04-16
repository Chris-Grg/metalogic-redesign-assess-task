import { NavLink } from "react-router-dom";

const ButtonToAbout = () => {
  return (
    <button className="font-extrabold text-red-600 text-center text-7xl">
      <NavLink to="/about">Go to About Us</NavLink>
    </button>
  );
};

export default ButtonToAbout;
