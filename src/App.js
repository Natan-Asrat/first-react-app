import './App.css';
import {useState} from 'react';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
    <Navbar>
      <NavItem icon="X"></NavItem>
      <NavItem icon="Y" />
      <NavItem icon="Z"/>
      <NavItem icon="D">
       <DropdownMenu/>
      </NavItem>
    </Navbar>

      <span>
        Click on D -> My Profile
      </span>
    </div>
  );
}

function Navbar(props){
  return(
    <nav className="navbar">
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </nav>
  );
}

function NavItem(props){
  const [open, setOpen] = useState(false);
  return(
    <li className="nav-item">
      <a className="icon-button" onClick={() => {setOpen(!open)}}>
        {props.icon}
      </a>

      {open && props.children};
    </li>

  );
}
function DropdownItem(props){

    return(
      <a className="menu-item" onClick={() => add()}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-button">{props.rightIcon}</span>
      </a>
    );
  }

function DropdownMenu(props){
  const [prof, setProf]= useState(true);
  // if(prof){
  //   document.querySelector(".profile").classList.add("slide");
  // }
  return(
    <div className="dropdown">
      <div className='first-div '>
      
        <DropdownItem>
        My Profile
      </DropdownItem>
      <DropdownItem leftIcon="* " rightIcon=" *">
        Hey
      </DropdownItem>
      
      {/* <MyProfile mine={false}>
      </MyProfile>*/}
      </div>
      <div className='second-div first'>{prof && <MyProfile> Hi </MyProfile>}</div>
    </div> 
  );
}

function MyProfile(props){
  
  return(
    <div className="profile">
      <DropdownItem>
      {props.children}
    </DropdownItem>
    </div>
    
    
  );
}

function add(){
  document.querySelector(".first-div").classList.toggle("slide");
  document.querySelector(".second-div").classList.toggle("slide");
  document.querySelector(".first-div").classList.toggle("first");
  document.querySelector(".second-div").classList.toggle("first");
}
export default App;
