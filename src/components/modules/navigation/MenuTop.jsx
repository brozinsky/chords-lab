import NavLink from "@/components/elements/buttons/NavLink";
import { Link } from "react-router-dom";
// import Hamburger from "@/elements/buttons/Hamburger";
// import NavLink from "@/elements/buttons/NavLink";

const navItems = [
  { name: "Chords", url: "/chords" },
  { name: "Scales", url: "/scales" },
  { name: "Circle", url: "/circle" },
];

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-neutral-600 border border-neutral-500">
        <nav className="container flex flex-wrap items-center justify-between">
          <Link to="/">
            <div className="flex items-center flex-shrink-0 mr-6 text-white cursor-pointer select-none">
              <span className="text-xl font-semibold tracking-tight text-emerald-500">
                Logo
              </span>
            </div>
          </Link>
          {/* <Hamburger /> */}
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
