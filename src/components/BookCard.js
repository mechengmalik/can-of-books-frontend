
import {React,  Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { withAuth0 } from '@auth0/auth0-react';
import {Button,Card} from 'react-bootstrap/';




class BookCard extends Component {
    constructor(props){
        super(props);
    }

    deleteBook = ()=>{
        this.props.deleteBook(this.props.book._id)
    }
  
  render() {
    //   console.log(this.props)

    
    return(
        <div>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
              {/* <small>{this.props.books.userEmail.substring(0,typeof'@')}</small> */}
            <Card.Title>{this.props.book.bookName}</Card.Title>
            <Card.Text>
              
            </Card.Text>
            <Card.Text>
              {this.props.book.description}
            </Card.Text>
            
          </Card.Body>
        <Button variant="danger" onClick={this.deleteBook}>
              X
            </Button> 
            <Button variant="info" onClick={this.updateBook}>
            Update
            </Button> 
           
        </Card>

        </div>
      )
  }
}

export default BookCard;