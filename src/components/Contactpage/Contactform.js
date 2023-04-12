import Form from 'react-bootstrap/Form';


function Contactform() {






    return (
     <Form className='form-section'>
        <section className='form-left'>
        <Form.Group className="contact-name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Your Name..." />
      </Form.Group>
      <Form.Group className="contact-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email address..." />
      </Form.Group>
      </section>
      <Form.Group className="contact-message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={10} placeholder='Your message...' />
      </Form.Group>
    </Form>
    )
}

export default Contactform;