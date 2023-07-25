import { useEffect, useState } from 'react';

import { Col, ListGroup, Row } from 'react-bootstrap';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { useAppContext } from '../../store/AppContext';
import { 
  closeModalsAction, 
  fetchFoldersAction, 
  openModalCreateFolderAction,
  savePinInFolderAction 
} from '../../store/actions';


export const ModalSavePin = ({ open }) => {
  const { state, dispatch } = useAppContext();

  const [ itensLoading, setItensLoading ] = useState({})

  const handleClose = () => {
    console.log('Fechando')
    dispatch(closeModalsAction())
  }

  const handleClickCreateFolder = () => {
    console.log('Clicou em criar pasta')
    dispatch(openModalCreateFolderAction())
  };

  const handleClick = async (folderId) => {
    // Loading true
    setItensLoading((prevState) => {
      return{
        ...prevState,
        [folderId]: true
      }
    })

    await savePinInFolderAction(dispatch, state.activePinId, folderId)
    // Loading false
    setItensLoading((prevState) => {
      return{
        ...prevState,
        [folderId]: false
      }     
    })
  }

  const foldersNormalized = state.folders.map(folder => {
    return ({
      ...folder,
      saved: folder.pins.includes(state.activePinId)
    })
  })

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
        {foldersNormalized.map((folder, folderIndex) => (
          <ListGroup.Item key={folderIndex}>
            <Row>
              <Col xs={8}>{folder.name}</Col>
              <Col xs={4} className='text-end'>
                <Button 
                  label={folder.saved ? 'Salvo' : 'Salvar'}
                  loadingLabel="Salvando"
                  onClick={() => handleClick(folder.id)}
                  variant={folder.saved ? 'secondary' : 'primary'}
                  disabled={folder.saved}
                  loading={itensLoading[folder.id]}
                />
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
        
      </ListGroup>
    </Modal>
  )
}