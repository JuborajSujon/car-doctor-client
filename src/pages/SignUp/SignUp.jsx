import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import useAuth from "./../../customHook/useAuth";

const SignUp = () => {
  const { createUser } = useAuth();
  const handleSignUP = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-[70vh]">
      <div className="hero-content flex-col lg:flex-row px-4 gap-6 md:gap-10">
        <div className="w-full md:w-4/5 lg:w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full md:w-4/5 lg:w-1/2 shadow-2xl bg-base-100">
          <form onSubmit={handleSignUP} className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phot URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </form>

          <div className="pb-6">
            <p className="text-center">
              Already have an account?{" "}
              <Link className="text-orange-600 font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
