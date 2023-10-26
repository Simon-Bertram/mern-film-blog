import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { LinkContainer } from 'react-router-bootstrap';
import { header } from 'express-validator';
import {BsSearch} from 'react-icons/bs';

const userInfo = null;

const attribution = 'https://unsplash.com/photos/group-of-people-staring-at-monitor-inside-room-23LET4Hxj_U?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash';

const Header = () => {
  return ( 
    <header>
      <Navbar expand="lg" data-bs-theme="dark">
        <Container>
          {/* <LinkContainer to="/" id='site-branding'>
            <Navbar.Brand>
              <h1 className='hero-title'>FilmZilla</h1>
              <h2>Film reviews</h2>
            </Navbar.Brand>
          </LinkContainer> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/reviews">
                <Nav.Link>Reviews</Nav.Link>
              </LinkContainer>

                { userInfo ? (
                  <>
                    <NavDropdown title={userInfo.name} id="username">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>
                          Profile
                        </NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                  ) 
                  : (
                  <>
                    <LinkContainer to="/login">
                      <Nav.Link><FaSignInAlt /> Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/register">
                      <Nav.Link><FaSignOutAlt /> Sign Up</Nav.Link>
                    </LinkContainer>
                  </>
                )}
                
                <Form inline style={{ border: "1px solid #32fbe2", borderRadius: "4px" }}>
                  <Row >
                    {/* <Col xs="auto">
                      <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2 search-box"
                      />
                    </Col> */}
                    <Col xs="auto" className='d-flex'>
                      <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                        Search
                      </Form.Label>
                      <InputGroup className="mb-2 align-self-center">
                        <InputGroup.Text className='text-light' style={{ fontSize: "1.5rem", background: "inherit"}}>
                          <BsSearch />
                        </InputGroup.Text>
                        <Form.Control id="inlineFormInputGroup" placeholder="Search" className='text-light' style={{ fontSize: "1.3rem", background: "inherit"}}/>
                      </InputGroup>
                    </Col>
                  </Row>
                </Form>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id='hero-content'>
        <h1 className='large-title'>FilmZilla</h1>
        <h2>Film reviews</h2>
      </div>
    </header>
   );
}
 
export default Header;