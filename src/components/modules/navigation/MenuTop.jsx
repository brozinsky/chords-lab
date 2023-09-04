import { Link } from "react-router-dom";
import Hamburger from "@/elements/buttons/Hamburger";
import NavLink from "@/elements/buttons/NavLink";

const navItems = [
  { name: "Page1", url: "/page-1" },
  { name: "Page2", url: "/page-2" },
  { name: "Page3", url: "/page-3" },
];

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="container flex flex-wrap items-center justify-between">
          <Link to="/">
            <div className="flex items-center flex-shrink-0 mr-6 text-white cursor-pointer select-none">
              <span className="text-xl font-semibold tracking-tight text-primary-500">
                Logo
              </span>
            </div>
          </Link>
          <Hamburger />
          <div className="justify-end flex-grow block w-full lg:flex lg:items-center lg:w-auto">
            <ul className="flex items-center justify-end space-x-8 text-sm">
              {navItems.map(({ name, url }, i) => {
                return (
                  <NavLink key={name + i} href={url}>
                    {name}
                  </NavLink>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
