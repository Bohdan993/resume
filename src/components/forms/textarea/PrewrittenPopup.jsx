import { CCard, CCardBody, CListGroup, CListGroupItem } from '@coreui/react'
import './textArea.scss'
import { ReactComponent as BoldIcon } from '../../../images/icons/bold-text.svg'
import { ReactComponent as ItalicIcon } from '../../../images/icons/italic-text.svg'
import { ReactComponent as UIcon } from '../../../images/icons/u-text.svg'
import { ReactComponent as LinkIcon } from '../../../images/icons/link-text.svg'
import { ReactComponent as List1Icon } from '../../../images/icons/list.svg'
import { ReactComponent as List2Icon } from '../../../images/icons/list2.svg'
import { ReactComponent as CopyIcon } from '../../../images/icons/copy-link.svg'
import { ReactComponent as PlusIcon } from '../../../images/icons/plus.svg'
import './prewrittenPopup.scss';

const PrewrittenPopup = ({items, handleItemClick}) => {

   return (
      <div className="prewritten-popup">
         <CCard style={{ width: 380/16 + 'rem' }}>
            <CCardBody>
            <CListGroup className='prewritten-popup__list'>
               {items && items.map(item => {
                  return (
                     <CListGroupItem 
                           className="prewritten-popup__list-item" 
                           key={item.id}
                           onClick={handleItemClick.bind(null, item.id)}
                        >{item.text}
                     </CListGroupItem>
                  )
               })}
            </CListGroup>
            </CCardBody>
         </CCard>
      </div>
   )
}
export default PrewrittenPopup;