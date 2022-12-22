import { CCol, CRow } from "@coreui/react";
import avatar from '../../../images/other/avatar-big.png'
import './resumeMain.scss'

const ResumeMain = () => {

   return (
      <div className="resume-main p-4">
         <CRow className="resume-main__row">
            <CCol className="resume-main__col1">
               <div className="resume-main__avatar-img">
                  <img src={avatar} alt="" />
               </div>
            </CCol>
            <CCol className="resume-main__col2">
               <div className="resume-main__head-info">
                  Market street 1, New York, 1021, The USA <br />
                  (412) 470-6532 - example@gmail.com
               </div>
               <div className="resume-main__title">
                  Kseniia Gorvat, Web-designer
               </div>
               <div className="resume-main__text">
                  <p>Most foreign employers ask for a cover letter. The content should hook the potential employer. Describe your key skills, your advantages, and why you are the right person for the job.</p>
               </div>
            </CCol>
         </CRow>
         <CRow className="resume-main__row mb-4">
            <CCol className="resume-main__col1">
               <div className="resume-main__label">
                  Employment</div>
            </CCol>
            <CCol className="resume-main__col2 ">
               <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-between align-items-center">
                  <div className="resume-main__title2">
                     Product Design
                  </div>
                  <div className="resume-main__head-text">
                     Agency "Design Trend" (May, 2003 - June, 2005)
                  </div>
               </div>
               <div className="resume-main__bottom">
                  <p className="resume-main__info-text">Most foreign employers ask for a cover letter. The content should hook the potential employer. Describe your key skills, your advantages, and why you are the right person for the job.</p>
               </div>
            </CCol>
         </CRow>
         <CRow className="resume-main__row mb-4">
            <CCol className="resume-main__col1">
               <div className="resume-main__label">
                  Education</div>
            </CCol>
            <CCol className="resume-main__col2 ">
               <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-between align-items-center">
                  <div className="resume-main__title2">
                     Academy of Fine Arts
                  </div>
                  <div className="resume-main__head-text">
                     Graphic Design (May, 2003 - June, 2005)
                  </div>
               </div>
               <div className="resume-main__bottom">
                  <p className="resume-main__info-text">Most foreign employers ask for a cover letter. The content should hook the potential employer. Describe your key skills, your advantages, and why you are the right person for the job.Most foreign employers ask for a cover letter. The content should hook the potential employer. Describe your key skills, your advantages, and why you are the right person for the job.</p>
               </div>
            </CCol>
         </CRow>
      </div>
   )
}
export default ResumeMain;