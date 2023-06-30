import { Col, ListGroup, Row } from 'react-bootstrap';
import { Modal } from '../../Modal/Modal';
import { Button } from '../../Button/Button';

export const ModalSavePin = ({ open }) => {
  return (
    <Modal 
      title="Salvar pin" 
      open={open} 
      controls={[
        {
          label: 'Criar pasta',
          variant: 'secondary',
          onClick: () => {
            console.log('Clicou em criar pasta')
          }
        }
      ]}>
       <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col xs={8}>Texto a ser salvo</Col>
            <Col xs={4} className='text-end'>
              <Button 
                label="Salvar"
                loadingLabel="Salvando"
              />
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={8}>Texto a ser salvo</Col>
            <Col xs={4} className='text-end'>
              <Button 
                label="Salvar"
                loadingLabel="Salvando"
              />
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={8}>Texto a ser salvo</Col>
            <Col xs={4} className='text-end'>
              <Button 
                label="Salvar"
                loadingLabel="Salvando"
              />
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Modal>
  )
}