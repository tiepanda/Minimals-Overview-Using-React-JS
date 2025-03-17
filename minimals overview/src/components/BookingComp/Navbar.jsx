// components/Navbar.jsx
import React from "react";
import {
  Navbar as BsNavbar,
  InputGroup,
  FormControl,
  Button,
  Dropdown,
} from "react-bootstrap";
import { List, Search, Bell, Person } from "react-bootstrap-icons";

const Navbar = ({ toggleSidebar }) => {
  return (
    <BsNavbar className="main-navbar bg-white shadow-sm">
      {/* <Button variant="light" className="border-0" onClick={toggleSidebar}>
        <List size={24} />
      </Button>
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="search-container ms-3">
          <InputGroup>
            <InputGroup.Text className="bg-light border-0">
              <Search />
            </InputGroup.Text>
            <FormControl
              placeholder="Search..."
              className="border-0 bg-light"
            />
          </InputGroup>
        </div>
        <div className="d-flex align-items-center">
          <Dropdown align="end" className="me-3">
            <Dropdown.Toggle
              variant="light"
              id="notification-dropdown"
              className="border-0"
            >
              <Bell size={20} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>New booking request</Dropdown.Item>
              <Dropdown.Item>Payment received</Dropdown.Item>
              <Dropdown.Item>System update</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown align="end">
            <Dropdown.Toggle
              variant="light"
              id="user-dropdown"
              className="border-0 d-flex align-items-center"
            >
              <div className="avatar me-2">
                <Person size={20} />
              </div>
              <div className="d-none d-md-block">Admin</div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div> */}
    </BsNavbar>
  );
};

export default Navbar;
