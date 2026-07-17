import { Link } from "react-router-dom";
import Container from "../common/Container";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: [
      { name: "All Products", path: "/products" },
      { name: "Shoes", path: "/products" },
      { name: "Electronics", path: "/products" },
      { name: "Accessories", path: "/products" },
    ],
    Company: [
      { name: "About Us", path: "/" },
      { name: "Contact", path: "/" },
      { name: "Careers", path: "/" },
    ],
    Support: [
      { name: "FAQs", path: "/" },
      { name: "Shipping", path: "/" },
      { name: "Returns", path: "/" },
      { name: "Privacy Policy", path: "/" },
    ],
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-900">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              to="/"
              className="text-2xl font-bold tracking-wide text-white"
            >
              <span className="text-blue-400">OXI</span>VOS
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Your destination for premium fashion and lifestyle products.
              Quality you can trust, style you'll love.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white">{title}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 transition hover:text-blue-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 py-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} OXIVOS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-slate-500 transition hover:text-blue-400"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 transition hover:text-blue-400"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 transition hover:text-blue-400"
            >
              Twitter
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
