import './resumeFooter.scss'
import { CButton } from '@coreui/react';
import { ReactComponent as TemplateIcon } from '../../../images/icons/select.svg'
import { ReactComponent as DownloadIcon } from '../../../images/icons/download.svg'
import { ReactComponent as DotsIcon } from '../../../images/icons/dots.svg'

const ResumeFooter = () => {

   return (
      <div className="resume-footer d-flex gap-3 justify-content-between py-3">
         <div className="resume-footer__left">
            <CButton className='resume-footer__button' color="secondary" variant="outline">
               <TemplateIcon />
               Select template
            </CButton>
         </div>
         <div className="resume-footer__right d-flex gap-3">
            <CButton className='resume-footer__button' color="secondary" variant="outline">
               <DownloadIcon />
               Download PDF
            </CButton>
            <CButton className='resume-footer__button' color="secondary" variant="outline">
               <DotsIcon />
            </CButton>
         </div>
      </div>
   )
}
export default ResumeFooter;