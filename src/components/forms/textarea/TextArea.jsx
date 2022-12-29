import { CFormTextarea } from '@coreui/react'
import './textArea.scss'
import { ReactComponent as BoldIcon } from '../../../images/icons/bold-text.svg'
import { ReactComponent as ItalicIcon } from '../../../images/icons/italic-text.svg'
import { ReactComponent as UIcon } from '../../../images/icons/u-text.svg'
import { ReactComponent as LinkIcon } from '../../../images/icons/link-text.svg'
import { ReactComponent as List1Icon } from '../../../images/icons/list.svg'
import { ReactComponent as List2Icon } from '../../../images/icons/list2.svg'
import { ReactComponent as CopyIcon } from '../../../images/icons/copy-link.svg'

import { useState, useEffect } from 'react';
import PrewrittenTextarea from './PrewrittenTextarea';

const Textarea = ({ 
   hideButton, 
   prewrite, 
   prewriteButtonHandler, 
   prewritePopupShow, 
   prewriteItems, 
   value, 
   onChange, 
   // selectedPrewriteItems, 
   // setSelectedPrewriteItems, 
   currentValueId,
   ...rest }) => {




   const clickHandler = (e) => {
      e.preventDefault();
   }

   return (
      <div className="textarea__item">
         {prewrite ? (
            <PrewrittenTextarea
            prewriteButtonHandler={prewriteButtonHandler}
            prewritePopupShow={prewritePopupShow}
            prewriteItems={prewriteItems}
            value={value}
            onChange={onChange}
            // selectedPrewriteItems={selectedPrewriteItems}
            // setSelectedPrewriteItems={setSelectedPrewriteItems}
            currentValueId={currentValueId}
            {...rest}
            />
            ) : (         
            <CFormTextarea
               value={value}
               onChange={onChange}
               {...rest}
            >
            </CFormTextarea>)
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