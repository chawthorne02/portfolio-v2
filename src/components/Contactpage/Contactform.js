import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contactform({ form, sendEmail }) {






    return (
     <Form className='form-section' ref={form} onSubmit={sendEmail}>
        <section className='form-left'>
        <Form.Group className="contact-name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Your Name..." name='user_name'/>
      </Form.Group>

      <Form.Group className="contact-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email address..." name='user-email'/>
      </Form.Group>
      </section>

      <Form.Group className="contact-message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={10} placeholder='Your message...' name='message'/>
      </Form.Group>

      <Button variant="primary" className="contact-button">
                Send Message
            </Button>
    </Form>
    )
}

export default Contactform;