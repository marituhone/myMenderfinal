import { useContext, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const LoginUser = () => {
  // const identification_number = useRef("");
  // const password = useRef("");
  const [identification_number, setIdentification_number] = useState("");
  const [password, setpassword] = useState("");

  const { loginUser } = useContext(AuthContext);

  const loginSubmit = async (e) => {
    e.preventDefault();
    console.log(identification_number);
    try {
      let payload = {
        identification_number: identification_number,
        password: password,
      };
      await loginUser(payload);
      // toast.success("success");
    } catch (error) {
      console.log(error);
      toast.success(error);
    }
  };
  return (
    <>
      {/* <Container className="mt-2">
            <Row>
              <Col className="col-md-8 offset-md-2">
                <legend>Login Form</legend>
                <form>
                  <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label>id</Form.Label>
                    <Form.Control type="text" ref={identification_number} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={password} />
                  </Form.Group>
                  <Button variant="primary" type="button" onClick={loginSubmit}>
                    Login
                  </Button>
                </form>
              </Col>
            </Row>
          </Container> */}

      <div className="flex min-h-screen items-center justify-center border-gray-400 shadow-lg ">
        <div className="mt-4 bg-white px-16 py-8 shadow-lg sm:mx-auto sm:w-full sm:max-w-md sm:px-10">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <p className="p-2 ">
            Not registered yet?{" "}
            <Link
              to="/register"
              className="hover:text-indego-500 ml-1 font-medium text-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {" "}
              Sign Up
            </Link>{" "}
          </p>
          <form onSubmit={loginSubmit} className="mb-0 space-y-6 p-2">
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="id">
                  ID Number
                </label>
                <input
                  type="text"
                  placeholder="ID Number"
                  id="id"
                  autoComplete="off"
                  required
                  value={identification_number}
                  onChange={(e) => setIdentification_number(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-1.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div className="mt-4">
                <label className="block" htmlFor="Password">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-1.5 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div className="mt-4">
                <button className="w-full justify-center rounded-md border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Login
                </button>
              </div>
              <div className=" mt-3">
                <a className="hover:text-indego-500 ml-1 cursor-pointer text-right font-medium text-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <p>Forget Password?</p>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginUser;
