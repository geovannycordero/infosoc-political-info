import './style.css';

import React from "react";
import Sidebar from "react-sidebar";
import MainContent from 'content/main-content';

const mql = window.matchMedia(`(min-width: 800px)`);

class LeftSideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  print() {
    console.log("object");
  }

  login() {
    return (
      <div>
        <div>
          <img src="../resources/default-user.png"/>
        </div>
        <div>
          <button className="button login" onClick={this.print}>Log In</button>
        </div>
        <div>
          <button className="button signup" onClick={this.print}>Sign Up</button>
        </div>
      </div>
    );
  }

  content() {
    return (
      this.login()
    );
  }

  render() {
    return (
      <Sidebar
        sidebarClassName="LeftSideBar"
        sidebar={this.content()}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
      >
        <App />
      </Sidebar>
    );
  }
}

export default LeftSideBar;

// https://github.com/balloob/react-sidebar