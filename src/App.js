import container from 'react-bootsrap/container';
import Formm from from react-bootstrap/Form';

import './App.css';
import Button  from 'react-bootsrap/Button';


function App() {
  return (

    <Container> id='main-container' className ="d-grid h-100">

         <Formm> id="sign-in-form" className="text-center w-100"
          <img 
        className= "mb-4 bootstrap-log"
        src "https://getbootstrap.com/docs/5.2/examples/sign-in/"
        alt= "Bootstrap 5"  />

        <h1> className= "ab-3 fs-3 fw-normal" Please sign in</h1>
          <Form.Group> controlId="sign-in-email-adress">
          <Form.control type ="email" size ="lg" placeholder="Email Adress" autoComplete="username" className=" position-relative" />
          </Form.Group>
          <Form.Group> controlId="sign-in-password" className ="mb-3"
          <Form.control type ="password" size ="lg" placeholder="password" autoComplete="current-password" className=" position-relative" />
          <Form.Group>
          </Form.Group> controlId="remember-me className="d-flex justify-content-center">
          </Form.Group>
          <Form.Check label="Remember me"/>

        </Form.Group>
      <div className=  "d-grid"> 

         <Button variant="primary" size "lg"> sign in </Button>
      </div>

      

    </Formm>


    </Container>




  );
}

export default App;
