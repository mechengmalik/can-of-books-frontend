import React from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import BookCard  from "./components/BookCard";

import { withAuth0 } from '@auth0/auth0-react';



class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      booksinfo:[]
    }
  }
  componentDidMount =async ()=>{
    const { user } = this.props.auth0;

    let urlBookData = `${process.env.REACT_APP_DATABASE}/books?userEmail=${user.email})`;
    console.log(urlBookData);
    let booksData = await axios.get(urlBookData);
    this.setState({
      booksinfo: booksData.data,
    });
  }



  render() {
    console.log('check data', this.state.booksinfo[0]);

    return(
      <div>
        
        <Jumbotron className='sad'>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
        </Jumbotron>
        {this.state.booksinfo.length > 0 && (this.state.booksinfo.map((book,i)=> <BookCard book ={book} key={i} />
        ))}
        
        </div>
    )

  }
}

export default withAuth0 (MyFavoriteBooks);
