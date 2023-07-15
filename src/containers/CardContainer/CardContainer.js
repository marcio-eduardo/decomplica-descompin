import { Card } from "../../components/Card/Card";
import { useAppContext } from "../../store/AppContext";
import { openModalSavePinAction } from "../../store/actions";

export const CardContainer = (props) => {
  const { dispatch } = useAppContext();
  const handleClick = () => {
    console.log('Clicou do CardContainer')
    dispatch(openModalSavePinAction())
  }

  return (
    <Card {...props} onClick={handleClick}/>
  )
}