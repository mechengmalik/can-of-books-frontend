
import { React, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { withAuth0 } from '@auth0/auth0-react';
import { Modal, Form } from 'react-bootstrap';
import axios from "axios";







class BookFormModal extends Component {

  constructor(props) {
    super(props);
}

addBook = (event)=>{
  this.props.addBook(event);
}

handleClose = ()=>{
  this.props.handleClose()
}
 



  render() {
    // console.log(this.addBook)


    return (
      <Modal show={this.props.show} onHide = {this.handleClose}>

        <Modal.Body>
          <Form on onSubmit={this.addBook}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
             
              <Form.Control type='text' name='bookName' placeholder='book Tiltle' />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
             
              <Form.Control type='text' name='description' placeholder='description' />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
             
              <Form.Control variant="danger" type='submit'  value='submit' />
              
            </Form.Group>
          
           
          </Form>
          
        </Modal.Body>

        
      </Modal >
    )
  }
}

export default BookFormModal;