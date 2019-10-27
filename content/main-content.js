import React from 'react';
import './main-content.css';
import Search from '../search/search.js';

class MainContent extends React.Component{
  constructor(props){
    super(props);
    this.state = { history: '' };

    // this.searchBox = this.searchBox.bind(this);
  }
  
  goToHomePage(){
    window.location.assign('/');
  }

  render(){
    return (
      <div className="content">
        <header className="header" onClick={this.goToHomePage}>Información</header>
        <Search/>
        <li>
          {this.state.history}
        </li>
      </div>
    );
  }
}

export default MainContent;
