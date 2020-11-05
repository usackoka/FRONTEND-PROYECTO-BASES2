import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';
import axios from '../services/axios';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import BootstrapTable from 'react-bootstrap-table-next';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const columns = [
    {
      dataField: 'Banco',
      text: 'Banco'
    },
    {
      dataField: 'Enero 2020',
      text: 'Enero 2020'
    },
    {
      dataField: 'Febrero 2020',
      text: 'Febrero 2020'
    },
    {
      dataField: 'Marzo 2020',
      text: 'Marzo 2020'
    },
    {
      dataField: 'Abril 2020',
      text: 'Abril 2020'
    },
    {
      dataField: 'Mayo 2020',
      text: 'Mayo 2020'
    },
    {
      dataField: 'Junio 2020',
      text: 'Junio 2020'
    },
    {
      dataField: 'Julio 2020',
      text: 'Julio 2020'
    },
    {
      dataField: 'Agosto 2020',
      text: 'Agosto 2020'
    },
    {
      dataField: 'Septiembre 2020',
      text: 'Septiembre 2020'
    },
    {
      dataField: 'Octubre 2020',
      text: 'Octubre 2020'
    },
    {
      dataField: 'Noviembre 2020',
      text: 'Noviembre 2020'
    },
    {
      dataField: 'Diciembre 2020',
      text: 'Diciembre 2020'
    }
  ];

  useEffect(() => {
    const getData = async () => {
      axios.get('ranking').then((response) => {
        setData(response.data.info);
        console.log('ranking consultado');
      });
    };

    getData();
  }, []);

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
              <Card.Header>Estadísticas</Card.Header>
              <Card.Body>
                <BootstrapTable
                  keyField="id"
                  noDataIndication={() => (
                    <div className="d-flex justify-content-center">Ningún resultado</div>
                  )}
                  bordered={false}
                  wrapperClasses="table-responsive"
                  classes="table-mp table-recent"
                  columns={columns}
                  data={data}
                />
              </Card.Body>
            </Card>
          </section>
        </Container>
      </Form>
    </>
  );
};

export default Dashboard;
