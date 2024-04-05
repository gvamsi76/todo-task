import React from "react";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <Nav
      activeKey="/home"
      className="navbar"
    //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
