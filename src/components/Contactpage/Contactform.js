import Form from 'react-bootstrap/Form';


function Contactform() {






    return (
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email address..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Your message...' />
      </Form.Group>
    </Form>
    )
}

export default Contactform;