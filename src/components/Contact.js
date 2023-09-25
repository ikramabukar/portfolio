import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1 className="contact text-center mt-5">How Can I Help?</h1>
      <p className="lead text-center">Get in touch with me</p>
      <Form className="border border-dark rounded">
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label> First Name: </Form.Label>
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>

        <Form.Label> Last Name: </Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
