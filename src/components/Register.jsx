/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthCon } from "./Provider/AuthProv";
import { updateProfile } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const Register = () => {
  const { createUser } = useContext(AuthCon);
  const navigate = useNavigate();
  const location1 = useLocation();
  const [registerError, setRegisterError] = useState("");

  const sweeterr=()=>
  {
        swal(
        `Welcome`,
        `You've successfully registered to Raf Events.`,
        "success"
      );
  }

  const hanreg = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const URL = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      setRegisterError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must include at least one uppercase letter.");
      return;
    }
    if (!/[@$!%*?&]/.test(password)) {
      setRegisterError(
        "Password must include at least one special character (e.g., @$!%*?&)."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: URL,
        })
          .then(() => {
            const p = result.user.displayName;

            swal(
              `Welcome ${p}!`,
              `You've successfully registered to Raf Events.`,
              "success"
            );
          })
          .catch((error) => {
            setRegisterError(error.message);
          });
        setTimeout(() => {
          window.location.reload();
        }, 2500);
        navigate(location1?.state ? location1.state : "/");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });

    e.target.name.value = "";
    e.target.photo.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
  };

  return (
    <div>
      <div className="relative">
        <div className="pt-24 bg-[#001233]">
          <div
            className=" hero min-h-screen bg-[#001233]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/5vv92mc/bouquet-pink-blue-hydrangeas-roses-lies-white-tabl.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div
                  className="text-center lg:text-left 
    "
                >
                  <h1 className="text-8xl font-extrabold text-[#fe5000]">
                    Register now!
                  </h1>
                  <p className="py-6 text-xl text-[#f7d5a2] font-bold ">
                    Join Raf Events and start planning your memorable
                    celebrations today! Sign up to access exclusive event
                    management tools and make your weddings, birthdays,
                    anniversaries, and more truly unforgettable.
                  </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#001233]">
                  <form onSubmit={hanreg} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-[#efe0ca]">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered"
                        name="name"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-[#efe0ca]">
                          PhotoURL
                        </span>
                      </label>
                      <input
                        type="url"
                        placeholder="URL"
                        className="input input-bordered"
                        name="photo"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-[#efe0ca]">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-[#efe0ca]">
                          Password
                        </span>
                      </label>
                      <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered"
                        name="password"
                        required
                      />
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn bg-[#efe0ca]  hover:bg-[#fe5000] hover:text-[#efe0ca]">
                        Register
                      </button>
                    </div>
                  </form>
                  {registerError && (
                        <p className="px-8 pb-4  text-red-700">{registerError}</p>
                  )}
                  <p className="text-center pb-8 text-[#efe0ca]">
                    Already have an account?{" "}
                    <Link className="text-[#fe5000] font-bold" to="/login">
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
