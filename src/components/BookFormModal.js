
import { React, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { withAuth0 } from '@auth0/auth0-react';
import { Modal, Form } from 'react-bootstrap';
import axios from "axios";







class BookFormModal extends Component {

  constructor(props) {
    super(props);
}

handleSubmit = (event)=>{
  this.props.handleSubmit(event);
}

handleClose = ()=>{
  this.props.handleClose()
}
  addBook = async (e) => {
    const { user } = this.props.auth0;
    e.preventDefault();
    // let urlBookData = `${process.env.REACT_APP_DATABASE}/books?userEmail=${user.email}`;
    // console.log('ssssssss',urlBookData);


    let newBookInfo = {
      bookName: e.target.bookName.value,
      description: e.target.description.value,
      userName: user.email
    }




    let booksNewData = await axios.post(`${process.env.REACT_APP_DATABASE}/addbooks`, newBookInfo)
    // console.log('ssssssss',booksNewData));


    console.log('eeeeeeeeee', booksNewData.data)

    this.setState({
      booksInfo: booksNewData.data,

    });
  }

  deleteBook = async(bookID)=>{
    const { user } = this.props.auth0;

    let deletedBook = await axios.delete(`${process.env.REACT_APP_DATABASE}/deletebooks/${bookID}?userEmail=${user.email}`)

    this.setState({
      booksInfo: deletedBook.data
    })


  }



  render() {
    console.log(this.addBook)


    return (
      <Modal.Dialog show={this.props.show} onHide = {this.handleClose}>

        <Modal.Body>
          <Form on onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
             
              <Form.Control type='text' name='bookName' placeholder='book Tiltle' />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
             
              <Form.Control type='text' name='description' placeholder='description' />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
             
              <Form.Control type='submit' name='description' value='submit' />
              
            </Form.Group>
          
            {/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
          
        </Modal.Body>

        
      </Modal.Dialog >
    )
  }
}

export default BookFormModal;