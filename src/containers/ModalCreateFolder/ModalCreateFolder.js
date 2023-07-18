import { useState, useEffect } from "react";

import { Form } from "react-bootstrap";
import { Modal } from "../../components/Modal/Modal";
import { useAppContext } from "../../store/AppContext";
import { closeModalsAction, saveFolderAction } from "../../store/actions";
import { saveFolderInitType, saveFolderSuccessType } from "../../store/types";

export const ModalCreateFolder = ({ open }) => {
  const { state, dispatch } = useAppContext();
  const [ folderName, setFolderName ] = useState('');

  const handleChange = (e) => {
    setFolderName(e.target.value);
  }
   
  const handleClose =() => {
    dispatch(closeModalsAction());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Fez o submit', folderName)
    saveFolderAction(dispatch, folderName)
    //handleClose()
  };

  useEffect(() => {
    if (state.type === saveFolderSuccessType) {
      handleClose();
    }
  }, [state.type])

  return(
    <Modal 
      open={open}
      title="Criar pasta"
      onHide={handleClose}
      controls={[
        {
          label: 'Criar e salvar',
          loadingLabel: 'Criando',
          variant: 'secondary',
          loading: state.type === saveFolderInitType,
          type: 'submit',
          form: 'form-criar-pasta',
        }
      ]}
    >
    <Form onSubmit={handleSubmit} id="form-criar-pasta">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome da Pasta</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Ex: Matemática" 
          value={folderName} 
          onChange={handleChange} 
        />
      </Form.Group>
    </Form>
    </Modal>
  )
}