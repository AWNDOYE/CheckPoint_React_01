import { Button, Navbar, Nav, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>;
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>

function App() {
  return (
    //Création de fragment 
    <>
      <div className="App">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Nav>
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#link">À Propos</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
        <h1>PARFUMERIE EN LIGNE</h1>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="givenchy.jpg" />
          <Card.Body>
            <Card.Title>Givenchy</Card.Title>
            <Card.Text>Eau de parfum Florale 100ML</Card.Text>
            <Button variant="primary"> Ajouter au panier</Button>
          </Card.Body>
        </Card>
        <br></br>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="dior.jpg" alt='' />
          <Card.Body>
            <Card.Title>DIOR</Card.Title>
            <Card.Text>Eau de parfum Florale 100ML</Card.Text>
            <Button variant="primary"> Ajouter au panier</Button>
          </Card.Body>
        </Card>
        <br></br>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="si.jpg" />
          <Card.Body>
            <Card.Title>ARMANI</Card.Title>
            <Card.Text>Eau de parfum Florale 100ML</Card.Text>
            <Button variant="primary"> Ajouter au panier</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
