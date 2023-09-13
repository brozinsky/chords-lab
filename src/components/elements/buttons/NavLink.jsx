import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavLink = ({ children, href }) => {
  const location = useLocation();
  return (
    <Link to={href}>
      <span
        className={`${
          location.pathname === href ? "navlink--active" : ""
        } text-neutral-100 navlink select-none block mt-4 text-lg cursor-pointer lg:inline-block lg:mt-0 `}
      >
        {children}
      </span>
    </Link>
  );
};

export default NavLink;
