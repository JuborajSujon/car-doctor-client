import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import useAuth from "../../customHook/useAuth";
import axios from "axios";

const Login = () => {
  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;

        console.log(loggedInUser);
        const user = { email };

        // navigate(location?.state ? location?.state : "/");

        // get access token
        axios
          .post("http://localhost:5000/jwt", user)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });

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
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold text-center">Login</h1>
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
                Login
              </button>
            </div>
          </form>
          <div className="space-y-5">
            <div className="divider"> Or Sign in with</div>

            <div className="grid grid-flow-col gap-4 px-6">
              <button className="btn btn-outline btn-info">
                Sign in with Google
              </button>
              <button className="btn btn-outline btn-info">
                Sign in with Github
              </button>
            </div>
            <div className="pb-6">
              <p className="text-center">
                New to Car Doctor?{" "}
                <Link className="text-orange-600 font-bold" to="/signup">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
