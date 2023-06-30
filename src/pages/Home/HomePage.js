import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ModalSavePin } from '../../components/containers/ModalSavePin/ModalSavePin';

import { Card } from "../../components/Card/Card"
import { ModalCreateFolder } from '../../components/containers/ModalCreateFolder/ModalCreateFolder';

export const HomePage = () => {
  return (
    <div>
      <ModalSavePin open={false} />
      <ModalCreateFolder open={true} />

      <Container fluid>
        <Row>
          <Col xs={6} md={2}>
            <Card 
              title="Engenharia" 
              image="https://picsum.photos/id/237/200/300" 
              total={0} 
            />
          </Col>
          <Col xs={6} md={2}>
            <Card 
              title="Física" 
              image="https://picsum.photos/id/737/200/300" 
              total={0} 
            />
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}