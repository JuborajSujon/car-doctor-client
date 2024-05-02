import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
      <h1 className="text-4xl font-bold text-center">404 - Page Not Found</h1>
      <p className="text-center">
        The page you are looking for does not exist.
      </p>
      <p className="text-center">Please check the URL and try again.</p>
      <p className="text-center">
        If the problem persists, please contact support.
      </p>
      <p className="text-center">Thank you for your patience.</p>
      <Link to="/" className="btn btn-error  btn-outline mt-4">
        Go Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
