import React, { Component } from 'react';
import List from "./components/List.jsx";

const Films_Url = "https://ghibliapi.herokuapp.com/films";
const People_Url = "https://ghibliapi.herokuapp.com/people"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      list: [],
      type:""
    }; 
  }

  showMovies = async() => {
    try {
      let res = await fetch(`${Films_Url}`);
      let data = await res.json();
      console.log(data);

      this.setState({
        list: data,
        type: "movies"
      });
    } catch (e) {
      console.log(e);
    }
  };

  showPeople = async() => {
    try {
      let res = await fetch(`${People_Url}`);
      let data = await res.json();
      console.log(data);

      this.setState({
        list: data,
        type: "people"
      });
    } catch (e) {
      console.log(e);
    }
  };
  
  render() {
    return (
      <React.Fragment>
        
        <div className="bg-success" align="center">
          
          <h1>Studio Ghibli Api</h1>

        </div>

        <div className="d-flex justify-content-center bg-danger">
          <button
            className="btn btn-dark btn-md m-2"
            onClick={this.showMovies}
          >Movies</button>
           <button
            className="btn btn-dark btn-md m-2"
            onClick={this.showPeople}
          >People</button>
          </div>

          

          <List type={this.state.type} list={this.state.list} />

      </React.Fragment>
      
      
      
    );
  }
}

export default App;
