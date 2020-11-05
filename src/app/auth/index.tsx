import React, { useState } from 'react';
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';
import axios from '../services/axios';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const history = useHistory();

  const handleClick = async (e: any) => {
    console.log(user, pass);
    const data = {
      user,
      pass
    };

    axios
      .post('auth/login', data)
      .then((response) => {
        history.push('/dashboard');
      })
      .catch((error) => {
        Swal.fire({
          title: 'Credenciales inválidas',
          icon: 'error'
        });
      });
  };

  return (
    <>
      <Form className="form-horizontal m-t-20 text-center" id="loginform">
        <Container fluid>
          <Row>
            <Col className="bg-secondary text-white">
              <div className="float-right" />
            </Col>
          </Row>
        </Container>

        <Container>
          <section className="mt-5">
            <Card>
              <Card.Header>Login</Card.Header>
              <Card.Body>
                <Row>
                  <Form.Group>
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="usuario"
                      onChange={(e: any) => {
                        setUser(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="contraseña"
                      onChange={(e: any) => {
                        setPass(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Button color="primary" onClick={handleClick}>
                    Login
                  </Button>
                </Row>
              </Card.Body>
            </Card>
          </section>
        </Container>
      </Form>
    </>
  );
};

export default Login;
