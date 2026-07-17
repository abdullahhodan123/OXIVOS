import { Link } from "react-router-dom";
import Container from "../components/common/Container";

function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <h1 className="text-8xl font-bold text-blue-600">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Page Not Found
        </h2>
        <p className="mt-4 max-w-md text-slate-600">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </Container>
  );
}

export default NotFound;
