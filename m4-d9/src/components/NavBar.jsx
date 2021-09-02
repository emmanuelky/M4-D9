import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

function NavBar({ history, location, match }) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link to="/">
                        <div className={location.pathname === '/' ? 'nav-link active' : 'nav-link', 'text-light'}>Book Shop</div>
                    </Link></Navbar.Brand>
                    <Nav className="me-auto">
                        {/* Link is a redirect component that you can use to wrap an image, a div, etc. */}
                        <Link to="/">
                            <div className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</div>
                        </Link>
                        {/* <Link to="/about">
                            <div className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>About</div>
                        </Link> */}
                        <Link to='/register'>
                            <div style={{ cursor: 'pointer' }} className={location.pathname === '/register' ? 'nav-link active' : 'nav-link'} onClick={() => history.push('/register')}>Register</div>
                        </Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default withRouter(NavBar)
