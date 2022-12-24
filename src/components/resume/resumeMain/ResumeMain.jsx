import { CCol, CRow } from "@coreui/react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import avatar from '../../../images/other/avatar-big.png'
import { formatDate } from "../../../utils";
import './resumeMain.scss'



const ResumeMain = () => {
   const contact = useSelector((state) => state.contact.contact);
   const employments = useSelector((state) => state.employment.employments);
   const educations = useSelector((state) => state.education.educations);

   return (
      <div className="resume-main p-4">
         <CRow className="resume-main__row">
            <CCol className="resume-main__col1">
               <div className="resume-main__avatar-img">
                  <img src={contact?.picture || avatar} alt="" />
               </div>
            </CCol>
            <CCol className="resume-main__col2">
               <div className="resume-main__head-info">
                  {`${contact?.address},`} {`${contact?.city},`} {`${contact?.zip_code},`} {contact?.country} <br />
                  {contact?.phone} {`- ${contact?.email}`}
               </div>
               <div className="resume-main__title">
                  {`${contact?.first_name} ${contact?.last_name}`}, Web-designer
               </div>
               <div className="resume-main__text">
                  <p>Most foreign employers ask for a cover letter. The content should hook the potential employer. Describe your key skills, your advantages, and why you are the right person for the job.</p>
               </div>
            </CCol>
         </CRow>
         {employments.length ? (
            <CRow className="resume-main__row mb-4">
               <CCol className="resume-main__col1">
                  <div className="resume-main__label">
                     Employment</div>
               </CCol>
               <CCol className="resume-main__col2">
                  {employments.map(el => (
                     <Fragment key={el.id}>
                        <div className="resume-main__head-info2 mb-2">
                           <h2 className="resume-main__title2">{el.title}</h2>
                           <p className="resume-main__head-text">
                           {el.company} {(el.period_from || el.period_to) && `(${formatDate(el.period_from)} - ${formatDate(el.period_to)})`}
                           </p>
                        </div>
                        <div className="resume-main__bottom">
                           <p className="resume-main__info-text">
                           {el.description}
                           </p>
                        </div>
                     </Fragment>
                  ))}
               </CCol>
            </CRow>
         ) : null}

         {educations.length ? (
            <CRow className="resume-main__row mb-4">
               <CCol className="resume-main__col1">
                  <div className="resume-main__label">
                     Education</div>
               </CCol>
               <CCol className="resume-main__col2">
                  {educations.map(el => (
                     <Fragment key={el.id}>
                        <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-between align-items-center">
                           <div className="resume-main__title2">
                              {el.facility}
                           </div>
                           <div className="resume-main__head-text">
                              {el.study} {(el.period_from || el.period_to) && `(${formatDate(el.period_from)} - ${formatDate(el.period_to)})`}
                           </div>
                        </div>
                        <div className="resume-main__bottom">
                           <p className="resume-main__info-text">                        {el.description}</p>
                        </div>
                     </Fragment>
                  ))}
               </CCol>
            </CRow>
         ) : null}

      </div>
   )
}
export default ResumeMain;