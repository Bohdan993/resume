import { CFormTextarea } from '@coreui/react'
import './textArea.scss'
import { ReactComponent as BoldIcon } from '../../../images/icons/bold-text.svg'
import { ReactComponent as ItalicIcon } from '../../../images/icons/italic-text.svg'
import { ReactComponent as UIcon } from '../../../images/icons/u-text.svg'
import { ReactComponent as LinkIcon } from '../../../images/icons/link-text.svg'
import { ReactComponent as List1Icon } from '../../../images/icons/list.svg'
import { ReactComponent as List2Icon } from '../../../images/icons/list2.svg'
import { ReactComponent as CopyIcon } from '../../../images/icons/copy-link.svg'
import { ReactComponent as PlusIcon } from '../../../images/icons/plus.svg'

const Textarea = ({ hideButton, prewrite }) => {
   return (
      <div className="textarea__item">
         <CFormTextarea
            id="exampleFormControlTextarea1"
            placeholder='Description of education' >
         </CFormTextarea>
         {prewrite ?
            <button className='textarea__prewrite-button'>
               Pre-written phrases  <PlusIcon />
            </button> : null}
         {hideButton || <div className="textarea__contols">
            <button className="textarea__button">
               <BoldIcon />
            </button>
            <button className="textarea__button">
               <ItalicIcon />
            </button>
            <button className="textarea__button">
               <UIcon />
            </button>
            <button className="textarea__button">
               <LinkIcon />
            </button>
            <div className="textarea__button-group">
               <button className="textarea__button">
                  <List1Icon />
               </button>
               <button className="textarea__button">
                  <List2Icon />
               </button>
            </div>
            <button className="textarea__button">
               <CopyIcon />
            </button>
         </div>}

      </div>

   )
}
export default Textarea;