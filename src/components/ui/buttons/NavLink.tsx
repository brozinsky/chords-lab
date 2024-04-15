import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type TProps = {
  children: React.ReactNode;
  href: string;
};

const NavLink = ({ children, href }: TProps) => {
  const location = useLocation();
  return (
    <Link to={href} className="flex items-center h-fit">
      <span
        className={`${
          location.pathname === href ? "navlink--active" : ""
        } text-muted navlink select-none block text-lg cursor-pointer lg:inline-block lg:mt-0 `}
      >
        {children}
      </span>
    </Link>
  );
};

export default NavLink;
