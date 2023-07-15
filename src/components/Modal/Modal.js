import ModalBS from 'react-bootstrap/Modal';
import { Button } from '../Button/Button';

export const Modal = ({ title, children, open, controls = [], onHide }) => {
  return (
    <ModalBS show={open} onHide={onHide}>
      <ModalBS.Header closeButton>
        <ModalBS.Title>{title}</ModalBS.Title>
      </ModalBS.Header>

      <ModalBS.Body>{children}</ModalBS.Body>

      <ModalBS.Footer>
        {controls.map((control, controlIndex) => (
          <Button 
            key={controlIndex} 
            {...control}
            // variant={control.variant} 
            // onClick={control.onClick}
            // label={control.label}
            // loadingLabel={control.loadingLabel}
            // loading={control.loading}
            // disabled={control.disabled}
          />          
        ))}
        
      </ModalBS.Footer>
    </ModalBS>
  );
}