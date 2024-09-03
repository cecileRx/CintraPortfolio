import {Link} from "react-router-dom"

const Navbar = () => {
  return (

      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div>
            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/">HOME</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/projects">PROJECTS</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link to="/projects">CONTACT</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
