import { Card } from "../../components/Card/Card";
import { useAppContext } from "../../store/AppContext";
import { openModalSavePinAction } from "../../store/actions";

export const CardContainer = (props) => {
  const { dispatch } = useAppContext();

  const handleClick = (pinId) => {
    //console.log('Clicou do CardContainer', pinId)
    dispatch(openModalSavePinAction(pinId))
  }

  return (
    <Card {...props} onClick={handleClick}/>
  )
}