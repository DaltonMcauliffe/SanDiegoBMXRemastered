import React from 'react'
import {Nav, NavItem} from "reactstrap"
import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <>
   <div className="header">
      <div className="header-container" >
        <div className="nav center" style={{ marginTop:"-20px"}}>
          <Nav>
            <NavItem>
              <NavLink active to="/" className="nav-link">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Schedule" className="nav-link">Schedule</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/About" className="nav-link">About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/BMXCoaching">BMX Coaching</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/StateFinals">State Finals</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/BMXCamps">BMX Camps</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/BMXBeginnerLeague">BMX Beginner League</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/OtherEvents">Other Events</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/More">More</NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header