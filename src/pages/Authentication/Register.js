import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "../../api/axios";
import { toast } from "react-toastify";

const Name_REGEX = /^[A-z][A-z]{1,23}$/;
const Id_REGEX = /^bole\/\d{5}\/\d{4}$/; //begin with a-z follow by forward slash then digit of 4 then slash then digit of 2
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; //must contain at least one lower case one upper case and number and special character and the length should be 8-24
const EMAIL_REGEX = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9._-]+)\.([a-zA-Z]{2,5})$/;

//  const REGISTER_URL = '/auth/register_user';
function Register() {
  const errRef = useRef("");

  const [first_name, setFname] = useState("");
  const [validFname, setValidFname] = useState(false);

  const [last_name, setLname] = useState("");
  const [validLname, setvalidLname] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [password2, setPassword2] = useState("");
  const [validPassword2, setvalidPassword2] = useState(false);

  const [identification_number, setIdentificationNumber] = useState("");
  const [validId, setValidId] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fresult = Name_REGEX.test(first_name);
    console.log(fresult);
    setValidFname(fresult);
    //setValidFname(Name_REGEX.test(Fname))
  }, [first_name]);

  useEffect(() => {
    const emailresult = EMAIL_REGEX.test(email);
    console.log(emailresult);
    setValidEmail(emailresult);
  }, [email]);

  useEffect(() => {
    const lresult = Name_REGEX.test(last_name);
    console.log(lresult);
    setvalidLname(lresult);
    //setValidLname(Name_REGEX.test(Lname))
  }, [last_name]);

  useEffect(() => {
    const result = Id_REGEX.test(identification_number);
    console.log(result);
    console.log(identification_number);
    setValidId(result);
    //setValidId(Name_REGEX.test(idnum))
  }, [identification_number]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === password2;
    setvalidPassword2(match);
    console.log(password2);
  }, [password, password2]);

  useEffect(() => {
    setErrMsg(""); //clearing the error message
  }, [first_name, last_name, identification_number, password, password2]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const first = Name_REGEX.test(first_name);
    const last = Name_REGEX.test(last_name);
    const emailnum = EMAIL_REGEX.test(email);
    const idnum = Id_REGEX.test(identification_number);


    if (!first || !last || !emailnum || idnum) {
      setErrMsg("invalid Entery");
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/register_user/",
        JSON.stringify({
          first_name: first_name,
          last_name: last_name,
          password: password,
          identification_number: identification_number,
          email: email,
          password2: password2,
        }),
        {
          headers: { "Content-Type": "application/json" },
          //   withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      setFname("");
      setPassword("");
      setLname("");
      setIdentificationNumber("");
      setPassword("");
      setEmail("");
      navigate("/login");
      toast.success("success");
    } catch (err) {
      toast.error(err ? err : "No Server Response");
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-col justify-center bg-gray-100   px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-2xl font-semibold text-gray-900">
            Create your account
          </h2>
          <p className="text-center">
            Already registered?
            <Link
              to="/login"
              className="hover:text-indego-500 ml-1 font-medium text-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign in
            </Link>
            {/* <a href="#" className='font-medium text-indigo-800 hover:text-indego-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-1' >Sign in</a> */}
          </p>
          <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"}>
            {errMsg}
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="rounded-lg bg-white px-6  py-8 shadow sm:px-10">
            <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
              <div className="flex space-x-3">
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div class="mt-1">
                    <input
                      id="firstname"
                      type="text"
                      aria-invalid={validFname ? "false" : "true"}
                      aria-describedby="fnote"
                      autoComplete="off"
                      onChange={(e) => setFname(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-1.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                  <p
                    id="fnote"
                    className={
                      first_name && !validFname
                        ? "bottom-10 mr-1 px-1 py-1 text-xs  text-black "
                        : "hidden"
                    }
                  >
                    2 to 24 alphabets.
                    <br />
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="lasttname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div class="mt-1">
                    <input
                      id="lastname"
                      type="text"
                      aria-invalid={validLname ? "false" : "true"}
                      aria-describedby="Lnote"
                      autoComplete="off"
                      onChange={(e) => setLname(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-1.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                  <p
                    id="Lnote"
                    className={
                      last_name && !validLname
                        ? "bottom-10 mr-1 px-1 py-1 text-xs  text-black"
                        : "hidden"
                    }
                  >
                    only alphabets.
                    <br />
                  </p>
                </div>
              </div>

              <div>
                <label
                  htmlFor="idcard"
                  className="block text-sm font-medium text-gray-700"
                >
                  ID card
                </label>
                <div class="mt-1">
                  <input
                    type="text"
                    id="idcard"
                    autoComplete="off"
                    aria-invalid={validId ? "false" : "true"}
                    aria-describedby="inote"
                    onChange={(e) => setIdentificationNumber(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-1.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <p
                  id="inote"
                  className={
                    identification_number && !validId
                      ? "bottom-10 mr-1 px-1 py-1 text-xs  text-black"
                      : "hidden"
                  }
                >
                  enter a valid id.
                  <br />
                </p>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div class="mt-1">
                  <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="emnote"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-1.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <p
                  id="emnote"
                  className={
                    email && !validEmail
                      ? "bottom-10 mr-1 px-1 py-1 text-xs  text-black"
                      : "hidden"
                  }
                >
                  enter a valid email.
                  <br />
                </p>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div class="mt-1">
                  <input
                    type="password"
                    id="password"
                    aria-invalid={password ? "false" : "true"}
                    aria-describedby="pnote"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-1.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                  <p
                    id="pnote"
                    className={
                      password && !validPassword
                        ? "bottom-10 mr-1  px-1 py-1 text-xs  text-black "
                        : "hidden"
                    }
                  >
                    8 to 24 characters.
                    <br />
                    Must include uppercase and lowercase letters, a number and a
                    special character.
                    <br />
                    Allowed special characters:{" "}
                    <span aria-label="exclamation mark">!</span>{" "}
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                  </p>
                </div>
              </div>
              <div>
                <label
                  htmlFor="cpassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div class="mt-1">
                  <input
                    type="password"
                    id="cpassword"
                    aria-invalid={password2 ? "false" : "true"}
                    aria-describedby="cnote"
                    onChange={(e) => setPassword2(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-1.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <p
                  id="cnote"
                  className={
                    password2 && !validPassword2
                      ? "bottom-10 mr-1 px-1 py-1 text-xs  text-black "
                      : "hidden"
                  }
                >
                  password doesn't match
                </p>
              </div>
              <div>
                {/* <Link to="/register"> */}
                <button
                  disabled={
                    !validFname ||
                    !validLname ||
                    !validPassword ||
                    !validPassword2 ||
                    !validId
                  }
                  className="w-full justify-center rounded-md border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign up
                </button>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
