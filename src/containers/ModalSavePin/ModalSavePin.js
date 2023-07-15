import { useEffect } from 'react';

import { Col, ListGroup, Row } from 'react-bootstrap';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { useAppContext } from '../../store/AppContext';
import { closeModalsAction, fetchFoldersAction, openModalCreateFolderAction } from '../../store/actions';


export const ModalSavePin = ({ open }) => {
  const { state, dispatch } = useAppContext();
  const handleClose = () => {
    console.log('Fechando')
    dispatch(closeModalsAction())
  }

  const handleClickCreateFolder = () => {
    console.log('Clicou em criar pasta')
    dispatch(openModalCreateFolderAction())
  }

  useEffect(() => {
    fetchFoldersAction(dispatch);
  }, [])

  return (
    <Modal 
      title="Salvar pin" 
      open={open}
      onHide={handleClose}
      controls={[
        {
          label: 'Criar pasta',
          variant: 'secondary',
          onClick: () => {
            handleClickCreateFolder()
          }
        }
      ]}>
       <ListGroup variant="flush">
        {state.folders.map((folder, folderIndex) => (
          <ListGroup.Item key={folderIndex}>
            <Row>
              <Col xs={8}>{folder.name}</Col>
              <Col xs={4} className='text-end'>
                <Button 
                  label="Salvar"
                  loadingLabel="Salvando"
                />
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
        
      </ListGroup>
    </Modal>
  )
}