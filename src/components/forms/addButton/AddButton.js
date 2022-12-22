import { ReactComponent as AddIcon } from '../../../images/icons/plus.svg'
import './addButton.scss'
const AddButton = (props) => {

   return (
      <button className="addButton ">
         <AddIcon />
         {props.text}
      </button>
   )
}
export default AddButton;