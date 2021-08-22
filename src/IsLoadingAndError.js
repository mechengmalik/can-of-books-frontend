import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
*{
  box-sizing: border-box;
}

@media(max-width: 1000px){
header{
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
}
.links{
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 70%;
  margin: auto;
  margin-top: 30px;
}
form{
  display: flex;
  flex-direction: column;
  text-align: center;

  justify-content: center;
  margin: auto;
  width: 70%;
}
div{
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  margin: auto;
}
h1{
  color: red;
}
h2{
  color: blue;
}
h3{
  color: coral;
}

body{
  color: gray;
}
}
class IsLoadingAndError extends React.Component {
  render() {
    return(
      this.props.auth0.isLoading ? 
        <div> Loading...</div>
        :
        this.props.auth0.error ?
          <div>Oops... {this.props.auth0.error.message}</div>
          :
          this.props.children
    );
  }
}

export default withAuth0(IsLoadingAndError);
