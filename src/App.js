import './App.css';
import { useState } from "react";
import Dropdown from './Components/Dropdown';
import DropdownList from './Components/DropdownList';


function App() {

  const list = [
    "Profile Information",
    "Change Password",
    "Become PRO",
    "Help",
    "Log Out"
  ];
  const dropdownInitialState = 0;
  const selectedInitialState = 0;

  const [dropdownState, setDropdownState] = useState(dropdownInitialState)
  const [selected, setSelectedState] = useState(selectedInitialState)

  return (
    <div data-id="wrapper" className={`dropdown-wrapper ${dropdownState == 1 ? 'open' : ''}`}>
      <Dropdown selected = { list[selected] } dropdownState = {dropdownState} setDropdownState = {setDropdownState} />
      <DropdownList selected = { selected } list = { list } setSelectedState = { setSelectedState } />
    </div>
  );
}

export default App;
