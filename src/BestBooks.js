import React from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import BookCard  from "./components/BookCard";

import { withAuth0 } from '@auth0/auth0-react';
import BookFormModal  from "./components/BookFormModal";
import { Button } from "react-bootstrap/";


class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      booksInfo:[],
      show:false
    }
  }
  componentDidMount =async ()=>{
    const { user } = this.props.auth0;

    let urlBookData = `${process.env.REACT_APP_DATABASE}/books?userEmail=${user.email}`;

    // console.log('ddddddd',urlBookData);

    let booksData = await axios.get(urlBookData);
    console.log('0gghhghgh',booksData.data)
    this.setState({
      booksInfo: booksData.data,

    });


    

  }
  showModal = ()=>{
    this.setState({
      show:true
    })
  }

  
  deleteBook = async(bookID)=>{
    const { user } = this.props.auth0;

    let deletedBook = await axios.delete(`${process.env.REACT_APP_DATABASE}/books/${bookID}?userEmail=${user.email}`)

    this.setState({
      booksInfo: deletedBook.data
    })


  }
  addBook = async(e) => {
    e.preventDefault();
    const { user } = this.props.auth0;
    // let urlBookData = `${process.env.REACT_APP_DATABASE}/books?userEmail=${user.email}`;
    // console.log('ssssssss',urlBookData);


    let newBookInfo = {
      bookName:e.target.bookName.value,
      description: e.target.description.value,
      userName: user.email
    }

    


    let booksNewData = await axios.post(`${process.env.REACT_APP_DATABASE}/books`,newBookInfo)
    // console.log('ssssssss',booksNewData));


    console.log('eeeeeeeeee',booksNewData.data)
    
    this.setState({
      booksInfo: booksNewData.data,
      show: false

    });
  }




  render() {
    // console.log('check data', this.state.booksInfo);

    return(
      <div>
        <BookFormModal show={this.state.show} handleSubmit={this.handleSubmit} handleClose={this.handleClose}/>
        <Jumbotron className='sad'>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
          <Button variant="danger" onClick={this.showModal}>
              add book
            </Button>
        </Jumbotron>

        {/* {this.state.newBook.length > 0 && (this.state.newBook.map((data,i)=> <AddBook data ={data} key={i} /> ))} */}
        

        {this.state.booksInfo.length > 0 && (this.state.booksInfo.map((book,i)=> <BookCard book ={book} key={i} deleteBook ={this.deleteBook} /> 
         ))} 
        
        
        </div>
    )

  }
}

export default withAuth0 (MyFavoriteBooks);
