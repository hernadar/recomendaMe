import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import image from '../assets/images/logoRecomendame.png';
import foto from '../assets/images/user.png';

function NavbarDarkExample() {
const imagenPerfil = 
    <span>
    <img src={foto} width="40" className="img-profile rounded-circle" alt='Foto de perfin mini' />
    </span>

  return (
    <Navbar  expand="lg">
      <Container fluid>
        <Navbar.Brand href='/'><img className="w-100" src={image} alt="Recomendame"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown.Item href="/companies/register">
                Crear Empresa
            </NavDropdown.Item>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={imagenPerfil}
              menuVariant="dark"
            >
              <NavDropdown.Item href="/users/profile">Mi Perfil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/users/logout">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Item href="/users/login">
                Iniciar Sesion
            </NavDropdown.Item>
            <NavDropdown.Item href="/users/register">
                Registrarse
            </NavDropdown.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDarkExample;