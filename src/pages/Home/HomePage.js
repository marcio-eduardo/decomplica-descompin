import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ModalSavePin } from '../../containers/ModalSavePin/ModalSavePin';
import { CardContainer } from '../../containers/CardContainer/CardContainer';
import { ModalCreateFolder } from '../../containers/ModalCreateFolder/ModalCreateFolder';
import { Notification } from '../../components/Notification/Notification';
import { useAppContext } from '../../store/AppContext';
import { saveFolderSuccessType } from '../../store/types';

export const HomePage = () => { 
  const { state, dispatch } = useAppContext();
  const [showFeedback, setShowFeedback ] = useState(false);

  useEffect(() => {
    if (state.type === saveFolderSuccessType) {
      setShowFeedback(true);
    }
  }, [state.type])

  return (
    <div>   
      <ModalSavePin open={state.mode === 'savePin'} />
      <ModalCreateFolder open={state.mode === 'createFolder'} />
      {showFeedback && (
        <Notification 
          message='Criado com sucesso'
          onClose={() => {
            console.log('Clicou em fechar')
          }}
        />
      )}         
      <Container fluid>
        <Row>
          <Col xs={8} md={4}>
            <CardContainer 
              title="Engenharia" 
              image="https://picsum.photos/id/737/200/300" 
              total={0} 
            />
          </Col>
          <Col xs={8} md={4}>
            <CardContainer 
              title="Física" 
              image="https://picsum.photos/id/7/200/300" 
              total={0} 
            />
          </Col>          
        </Row>
      </Container>
    </div>
  )
}