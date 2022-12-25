import { ReactComponent as AddIcon } from '../../../images/icons/plus.svg'
import { ReactComponent as DeleteIcon } from '../../../images/icons/remove.svg'

const SkillItem = ({ selected, rating, visibleRating, id, text, onChange }) => {
   return (
      <div className="skills__item d-flex gap-2 align-items-center">
         {text}{selected && visibleRating ? rating : null} <button onClick={(e) => onChange(id, e)} className="skills__button">{selected ? <DeleteIcon /> : <AddIcon />}</button>
      </div>
   )
}
export default SkillItem;