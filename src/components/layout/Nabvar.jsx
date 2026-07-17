
import { NavLink } from "react-router-dom";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import Container from "../common/Container";
import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";

function Nabvar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

 useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isOpen]);



  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <Container>
          <nav className="flex h-18 items-center justify-between">
            {/* Logo */}
            <NavLink
              to="/"
              className="text-2xl font-bold tracking-wide text-slate-900 transition-transform duration-300 hover:scale-105"
            >
              <span className="text-blue-600">OXI</span>VOS
            </NavLink>
         

            {/* Desktop Menu */}
            <ul className="hidden items-center gap-8 lg:flex">
  {navLinks.map((link) => (
    <li key={link.name}>
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          `relative pb-1 font-medium transition-all duration-300 ${
            isActive
              ? "text-blue-600"
              : "text-slate-600 hover:text-blue-600"
          }`
        }
      >
        {({ isActive }) => (
          <>
            {link.name}

            {link.name === "Cart" && (
    <span className="ml-2 rounded-full bg-blue-600 px-2 py-1 text-xs text-white">
      {cartItems.length}
    </span>
  )}

            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive ? "w-full" : "w-0"
              }`}
            />
          </>
        )}
      </NavLink>
    </li>
  ))}
</ul>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="text-slate-700 lg:hidden"
            >
              <HiOutlineBars3 size={30} />
            </button>
          </nav>
        </Container>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-white shadow-2xl transition-transform duration-500 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold tracking-wide text-slate-900"
          >
            <span className="text-blue-600">OXI</span>VOS
          </NavLink>

          <button onClick={() => setIsOpen(false)}>
            <HiOutlineXMark
              size={30}
              className="text-slate-700"
            />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-t border-slate-200 p-5">
  <button
    onClick={() => setIsOpen(false)}
    className="w-full rounded-lg bg-slate-900 py-3 text-white transition hover:bg-slate-800"
  >
    Close Menu
  </button>
</div>

        {/* Drawer Links */}
        <ul className="mt-6 flex flex-col gap-2 px-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default Navbar;
