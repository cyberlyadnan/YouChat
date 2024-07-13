import React, { useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, database } from "../../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../utils/upload";
import logo from "../../assets/images/userComment.png";
import Spinner from "../Spinner";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const profile = useRef(null);
  const [avatar, setAvatar] = useState({
    name: logo,
    file: logo,
  });

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;

        let imageUrl = logo;
        if (profile.current.files && profile.current.files[0]) {
          imageUrl = await upload(profile.current.files[0]);
        }

        try {
          await setDoc(doc(database, "users", user.uid), {
            id: user.uid,
            username: username.current.value,
            email: email.current.value,
            avatar: imageUrl,
            blocked: [],
          });

          await setDoc(doc(database, "userchats", user.uid), {
            chats: [],
          });

          toast.success("User registered successfully");
        } catch (err) {
          console.error("Error adding document: ", err);
          toast.warn("Error adding document: " + err.message);
        }
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;
        toast.success("Successfully Logged In");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Authentication error: ", errorCode, errorMessage);
      toast.error(`${errorCode}: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <section className=" opacity-85 rounded-lg ">
        <div className="flex flex-col items-center justify-center px-6 pt-7 mx-auto lg:py-4 h-[90vh] ">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black dark:border-gray-700">
            <div className="flex justify-center">
              <div className="loader pt-5">
                <svg
                  height="0"
                  width="0"
                  viewBox="0 0 64 64"
                  className="absolute"
                >
                  <defs
                    className="s-xJBuHA073rTt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <linearGradient
                      className="s-xJBuHA073rTt"
                      gradientUnits="userSpaceOnUse"
                      y2="2"
                      x2="0"
                      y1="62"
                      x1="0"
                      id="b"
                    >
                      <stop
                        className="s-xJBuHA073rTt"
                        stopColor="#973BED"
                      ></stop>
                      <stop
                        className="s-xJBuHA073rTt"
                        stopColor="#007CFF"
                        offset="1"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      className="s-xJBuHA073rTt"
                      gradientUnits="userSpaceOnUse"
                      y2="0"
                      x2="0"
                      y1="64"
                      x1="0"
                      id="c"
                    >
                      <stop
                        className="s-xJBuHA073rTt"
                        stopColor="#FFC800"
                      ></stop>
                      <stop
                        className="s-xJBuHA073rTt"
                        stopColor="#F0F"
                        offset="1"
                      ></stop>
                      <animateTransform
                        repeatCount="indefinite"
                        keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
                        keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1"
                        dur="8s"
                        values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
                        type="rotate"
                        attributeName="gradientTransform"
                      ></animateTransform>
                    </linearGradient>
                    <linearGradient
                      className="s-xJBuHA073rTt"
                      gradientUnits="userSpaceOnUse"
                      y2="2"
                      x2="0"
                      y1="62"
                      x1="0"
                      id="d"
                    >
                      <stop
                        className="s-xJBuHA073rTt"
                        stopColor="#00E0ED"
                      ></stop>
                      <stop
                        className="s-xJBuHA073rTt"
                        stopColor="#00DA72"
                        offset="1"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 64 64"
                  height="64"
                  width="64"
                  className="inline-block"
                >
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="8"
                    stroke="url(#b)"
                    d="M 54.722656,3.9726563 A 2.0002,2.0002 0 0 0 54.941406,4 h 5.007813 C 58.955121,17.046124 49.099667,27.677057 36.121094,29.580078 a 2.0002,2.0002 0 0 0 -1.708985,1.978516 V 60 H 29.587891 V 31.558594 A 2.0002,2.0002 0 0 0 27.878906,29.580078 C 14.900333,27.677057 5.0448787,17.046124 4.0507812,4 H 9.28125 c 1.231666,11.63657 10.984383,20.554048 22.6875,20.734375 a 2.0002,2.0002 0 0 0 0.02344,0 c 11.806958,0.04283 21.70649,-9.003371 22.730469,-20.7617187 z"
                    className="dash"
                    id="y"
                    pathLength="360"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  style={{
                    "--rotation-duration": "0ms",
                    "--rotation-direction": "normal",
                  }}
                  viewBox="0 0 64 64"
                  height="64"
                  width="64"
                  className="inline-block"
                >
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="10"
                    stroke="url(#c)"
                    d="M 32 32
        m 0 -27
        a 27 27 0 1 1 0 54
        a 27 27 0 1 1 0 -54"
                    className="spin"
                    id="o"
                    pathLength="360"
                  ></path>
                </svg>
                <div className="w-2"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  style={{
                    "--rotation-duration": "0ms",
                    "--rotation-direction": "normal",
                  }}
                  viewBox="0 0 64 64"
                  height="64"
                  width="64"
                  className="inline-block"
                >
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="8"
                    stroke="url(#d)"
                    d="M 4,4 h 4.6230469 v 25.919922 c -0.00276,11.916203 9.8364941,21.550422 21.7500001,21.296875 11.616666,-0.240651 21.014356,-9.63894 21.253906,-21.25586 a 2.0002,2.0002 0 0 0 0,-0.04102 V 4 H 56.25 v 25.919922 c 0,14.33873 -11.581192,25.919922 -25.919922,25.919922 a 2.0002,2.0002 0 0 0 -0.0293,0 C 15.812309,56.052941 3.998433,44.409961 4,29.919922 Z"
                    className="dash"
                    id="u"
                    pathLength="360"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleLogin}
                className="space-y-1 md:space-y-2"
                action="#"
              >
                {isSignUp ? (
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      ref={username}
                      type="text"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Example .... John Doe"
                      required=""
                    />
                  </div>
                ) : (
                  ""
                )}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    ref={email}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    ref={password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                {isSignUp ? (
                  <div className="mb-4 cursor-pointer">
                    <label
                      htmlFor="file-upload"
                      className="flex cursor-pointer items-center text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      <FaUser className="text-gray-500 dark:text-gray-400 mr-2" />{" "}
                      <p>Select Profile Picture</p>
                    </label>
                    <input
                      ref={profile}
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="mt-1 hidden w-full text-gray-500 dark:text-gray-400 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 p-1"
                    />
                  </div>
                ) : (
                  ""
                )}
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>

                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  {!isSignUp ? (
                    <Link
                      to="/"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </Link>
                  ) : (
                    ""
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={
                    "w-full bg-blue-800 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" +
                    (loading ? " cursor-not-allowed bg-black" : "")
                  }
                >
                  {loading ? <Spinner /> : isSignUp ? "Sign Up" : "Login"}
                </button>
                <p
                  className="flex cursor-pointer text-sm font-light text-gray-500 dark:text-gray-400"
                  onClick={toggleSignUp}
                >
                  {!isSignUp
                    ? "Don’t have an account yet?"
                    : "Already have an account..."}
                  {"  "}{" "}
                  <span className="font-bold text-white">
                    {!isSignUp ? "Sign Up" : "Login"}
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
