import { useState } from 'react';
import {
   CFormInput,
   CFormFloating
} from "@coreui/react";
import { ReactComponent as RemoveIcon } from '../../../images/icons/delete.svg'
import './inputRemove.scss'

const InputRemove = () => {
   const [value, setValue] = useState('');

   const handleClick = (e) => {
      setValue('');
   }

   return (
      <div className="remove-input">
         <CFormInput value={value} type="text" onChange={(e) => setValue(e.target.value)} placeholder="Field of study" />
         <span onClick={(e) => handleClick(e)} className="remove-input__button">
            <RemoveIcon />
         </span>
      </div>
   )
}
export default InputRemove;