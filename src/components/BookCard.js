
import {React,  Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';




class BookCard extends Component {
  
  render() {
      console.log(this.props)

    
    return(
        <Card style={{ width: '18rem' }}>
          <Card.Body>
              <small>{this.props.books.userEmail.substring(0,typeof'@')}</small>
            <Card.Title>{this.props.book.bookName}</Card.Title>
            <Card.Text>
              
            </Card.Text>
            <Card.Text>
              {this.props.books.description}
            </Card.Text>
            
          </Card.Body>
           
        </Card>
      )
  }
}

export default BookCard;