import { ReactComponent as BackIcon } from '../../images/icons/back.svg'
import { CCol } from '@coreui/react';
import './headMainContent.scss'
import {
   CFormSwitch,
} from "@coreui/react";

const HeadMainContent = (props) => {

   const { title, description, switchOk } = props;

   return (
      <>
         <a href="" className="main-content__back nav-link">
            <BackIcon className='nav-icon' />
            Back
         </a>
         <h2 className="main-content__title">
            {title}
         </h2>
            {description && (<div className="main-content__head d-flex justify-content-between gap-3 mb-4">
               {description ? <p className='main-content__description '>{description}</p> : null}
               {switchOk ? <CFormSwitch onChange={(e) => props.changeSwitch(e.target.checked)} label={switchOk} id="formSwitchCheckDefault" /> : null}
            </div>) }
      </>
   )
}

export default HeadMainContent;