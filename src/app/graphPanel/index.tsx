import Spinner from '@components/Global/Spinner';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';
import Chart from 'react-google-charts';
import axios from '../services/axios';

const GraphPanel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios.get('ranking').then((response) => {
        setData(response.data.info);
        console.log('ranking consultado');
      });
    };

    getData();
  }, []);

  const bancos = data?.map((item: any) => item?.Banco);
  const rows = data?.map((item: any) => [...Object.values(item)]);
  console.log(bancos);
  console.log(rows);

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
                {data.length === 0 ? (
                  <Spinner />
                ) : (
                  <Chart
                    width={'100%'}
                    height={'500'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[[...bancos], ...rows]}
                    options={{
                      hAxis: {
                        title: 'Banco'
                      },
                      vAxis: {
                        title: 'Fecha'
                      },
                      series: {
                        1: { curveType: 'function' }
                      }
                    }}
                    rootProps={{ 'data-testid': '4' }}
                  />
                )}
              </Card.Body>
            </Card>
          </section>
        </Container>
      </Form>
    </>
  );
};

export default GraphPanel;
