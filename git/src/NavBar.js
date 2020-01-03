import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import dataList from './list.json';

for (let i = 0; i < Object.keys(dataList).length + 1; i++) {
  console.log(dataList.dirs[i]);
  for (let j = 0; j < Object.keys(dataList.dirs[i].subdirs).length; j++) {
    console.log(dataList.dirs[i].subdirs[j]);
  }
}

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {isShowingDropdown: false, isShowingNav: true};
  }

  changeDisplay() {
    this.setState({isShowingDropdown: !this.state.isShowingDropdown});
  }

  handleToggle() {
    this.setState({ isShowingNav: !this.state.isShowingNav });
  }
  render() {
    let btn_classes = this.state.isShowingDropdown ? "showing" : "hidden";
    let navID = this.state.isShowingNav ? "li" : "hidden";

    return (
      
      <div className="navBar">
        
        <div className="border-right" id="sidebar-wrapper">

          <button className="dropdown-btn list-group-item list-group-item-action item" id="menu-toggle" onClick={this.handleToggle}><FontAwesomeIcon icon={faBars} /></button>

          <div class={navID}>
            {/* List Items */}
            <div className="list-group list-group-flush">
              <a href="http://#" className="list-group-item list-group-item-action item">{dataList.dirs[0].incoming}</a>

              <button className="dropdown-btn list-group-item list-group-item-action item expandible" onClick={this.changeDisplay}>Dropdown</button>

              <div className={btn_classes + " dropdown-container expandible"}>
                <a href="http://#" className="list-group-item list-group-item-action item">Test1</a>
                <a href="http://#" className="list-group-item list-group-item-action item">Test2</a>
              </div>
              
            </div>
          </div>
        </div>
        

      </div>
    );
  }
}



export default NavBar;
