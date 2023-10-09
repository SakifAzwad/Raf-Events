import { useContext, useState } from "react";
import { AuthCon } from "./Provider/AuthProv";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const Login = () => {

  const {signIn,signInWithGoogle}=useContext(AuthCon);
  const navigate = useNavigate();
  const location = useLocation();
  const [registerError, setRegisterError] = useState("");

  const autolog = () =>
  {
    signInWithGoogle()
    .then((result)=>
    {
      const p=result.user.displayName;
      swal(`Welcome Back ${p}!`,`You've successfully logged in to Raf Events.`, "success");
      navigate(location?.state ? location.state : '/');
    })
    .catch(error=>
      {
        setRegisterError(error.message);
      })
  }

  const hanlogin=e=>
  {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const email = form.get('email');
      const password = form.get('password');

      signIn(email,password)
      .then((result)=>
        {
          const p=result.user.displayName;
          swal(`Welcome Back ${p}!`,`You've successfully logged in to Raf Events.`, "success");
          navigate(location?.state ? location.state : '/');
        })
      .catch(error=>
        {
          console.log(error.code);
          setRegisterError(error.message);
        })
      
      e.target.email.value="";
      e.target.password.value="";
  }


  return (
    <div>
      <div className="relative">
        <div className="pt-24 bg-[#001233]">
          <div
            className=" hero min-h-screen bg-[#001233]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/jfqLQgh/luxurious-decoration-table.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero min-h-screen">
              <div className="hero-content flex-col lg:flex-row">
                <div
                  className="text-center lg:text-left 
    "
                >
                  <h1 className="text-8xl font-extrabold text-[#fe5000]">
                    Login now!
                  </h1>
                  <p className="py-6 text-xl text-[#f7d5a2] font-bold ">
                    Welcome back! Please log in to access your event planning
                    dashboard and continue creating memorable experiences.
                  </p>
                </div>
                <div className="card pb-8 flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#001233]">
                  <form onSubmit={hanlogin} className="px-6 pt-4 ">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-[#efe0ca]">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered"
                        required
                        name="email"
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
                        required
                        name="password"
                      />
                      <label className="">
                        <a
                          href="#"
                          className="label-text-alt  text-[#efe0ca] hover:text-[#f7d5a2]"
                        >
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn bg-[#efe0ca]  hover:bg-[#fe5000] hover:text-[#efe0ca]">
                        Sign In
                      </button>
                    </div>
                    <h2 className="text-[#efe0ca] text-center mt-2 py-2">Or</h2>
                    
                  </form>
                  <div className="form-control mt-2 px-6">
                      <button onClick={autolog} className="btn  bg-[#001233] hover:bg-[#113372] text-[#efe0ca]">
                        Sign in With <span className="text-[#4285F4]">G</span>
                        <span className="text-[#EA4335]">O</span>
                        <span className="text-[#FBBC05]">O</span>
                        <span className="text-[#4285F4]">G</span>
                        <span className="text-[#34A853]">L</span>
                        <span className="text-[#EA4335]">E</span>
                      </button>
                    </div>
                    {registerError && (
                        <p className="text-center  pt-4  text-red-700">Invalid Email or Password</p>
                  )}
                    <p className="text-center pt-4  text-[#efe0ca]">
                    Do not have an account?{"  "} 
                    <Link className="text-[#fe5000] font-bold" to="/register">
                        Register
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

export default Login;
