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
import PrewrittenPopup from './PrewrittenPopup';
import { useState } from 'react';

const Textarea = ({ hideButton, prewrite, prewriteButtonHandler, prewritePopupShow, prewriteItems, value,  ...rest }) => {


   const [selectedItems, setSelectedItems] = useState([]);

   const clickHandler = (e) => {
      e.preventDefault();
   }

   const handleItemClick = (id, e) => {
      const item = prewriteItems.filter(item => item.id === id);
      setSelectedItems(prev => [...prev, ...item]);
   }

   console.log(selectedItems);

   return (
      <div className="textarea__item">
         <CFormTextarea
            value={selectedItems.length ? ((value ? value + '\n' : '') + selectedItems.map(item => item.text).join('\n')) : value}
            {...rest}
         >
         </CFormTextarea>
         {prewrite ?
            (  <>
               <button onClick={(e) => {clickHandler(e); prewriteButtonHandler?.();}} className={`textarea__prewrite-button ${prewritePopupShow ? 'active' : ''}`}>
                  Pre-written phrases  <PlusIcon />
               </button>
               {prewritePopupShow && <PrewrittenPopup items={prewriteItems} handleItemClick={handleItemClick}/>}
               </>
            ) 
            : 
               null
         }
         {hideButton || <div className="textarea__contols">
            <button onClick={clickHandler} className="textarea__button">
               <BoldIcon />
            </button>
            <button onClick={clickHandler} className="textarea__button">
               <ItalicIcon />
            </button>
            <button onClick={clickHandler} className="textarea__button">
               <UIcon />
            </button>
            <button onClick={clickHandler} className="textarea__button">
               <LinkIcon />
            </button>
            <div className="textarea__button-group">
               <button onClick={clickHandler} className="textarea__button">
                  <List1Icon />
               </button>
               <button onClick={clickHandler} className="textarea__button">
                  <List2Icon />
               </button>
            </div>
            <button onClick={clickHandler} className="textarea__button">
               <CopyIcon />
            </button>
         </div>}

      </div>

   )
}
export default Textarea;