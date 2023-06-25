    import { useContext, useRef } from "react";
    import { Col, Container, Row } from "react-bootstrap";
    import Button from "react-bootstrap/Button";
    import Form from "react-bootstrap/Form";
    import AuthContext from "../../context/AuthContext";
    const LoginUser = () => {
      const identification_number = useRef("");
      const password = useRef("");
      const {loginUser}= useContext(AuthContext)
     
      const loginSubmit = async () => {
        let payload = {
          identification_number: identification_number.current.value,
          password: password.current.value
        }
        await loginUser(payload);
      };
      return (
        <>
       
          <Container className="mt-2">
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
          </Container>
        </>
      );
    };
    export default LoginUser;