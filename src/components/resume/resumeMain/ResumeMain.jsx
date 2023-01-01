import { CCol, CRow } from "@coreui/react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import avatar from '../../../images/other/avatar-big.png'
import { formatDate } from "../../../utils";
import ReactStars from "react-rating-stars-component";
import './resumeMain.scss'



const ResumeMain = () => {
   const contact = useSelector((state) => state.contact.contact);
   const employments = useSelector((state) => state.employment.employments);
   const educations = useSelector((state) => state.education.educations);
   const skills = useSelector((state) => state.skills.skillss);
   const socials = useSelector((state) => state.socials.socialss);
   const certificaties = useSelector((state) => state.certificaties.certificatiess);
   const course = useSelector((state) => state.course.courses);
   const hobies = useSelector((state) => state.hobies.hobiess);
   const intership = useSelector((state) => state.intership.interships);
   const languages = useSelector((state) => state.languages.languagess);
   const reference = useSelector((state) => state.reference.references);
   const activity = useSelector((state) => state.activity.activitys);

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
                  {contact?.address && (`${contact.address},`)} {contact?.city && (`${contact.city},`)} {contact?.zip_code && (`${contact.zip_code},`)} {contact?.country} <br />
                  {contact?.phone} {contact?.email && (`- ${contact?.email}`)}
               </div>
               <div className="resume-main__title">
                  {`${contact?.first_name} ${contact?.last_name ? contact?.last_name + ',': ''}`} Web-designer
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
            <CCol className="resume-main__col2">
               {employments.map(el => {
                  return (
                     <Fragment key={el?.id}>
                        <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-between align-items-center">
                           <h2 className="resume-main__title2">{el?.title}</h2>
                           <p className="resume-main__head-text">
                           {el?.company} {(el?.period_from || el?.period_to) && `(${formatDate(el?.period_from)} - ${formatDate(el?.period_to)})`}
                           </p>
                        </div>
                        <div className="resume-main__bottom">
                           <p className="resume-main__info-text">
                              {el?.assignment}
                           </p>
                        </div>
                     </Fragment>
                  );
               })}
            </CCol>
         </CRow>

         <CRow className="resume-main__row mb-4">
            <CCol className="resume-main__col1">
               <div className="resume-main__label">
                  Education</div>
            </CCol>
            <CCol className="resume-main__col2">
               {educations.map(el => (
                  <Fragment key={el?.id}>
                     <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-between align-items-center">
                        <div className="resume-main__title2">
                           {el?.facility}
                        </div>
                        <div className="resume-main__head-text">
                           {el?.study} {(el?.period_from || el?.period_to) && `(${formatDate(el?.period_from)} - ${formatDate(el?.period_to)})`}
                        </div>
                     </div>
                     <div className="resume-main__bottom">
                        <p className="resume-main__info-text">{el?.description}</p>
                     </div>
                  </Fragment>
               ))}
            </CCol>
         </CRow>

         <CRow className="resume-main__row mb-4">
            <CCol className="resume-main__col1">
               <div className="resume-main__label">
                  Skills</div>
            </CCol>
            <CCol className="resume-main__col2">
               {skills.map((el, ind, arr) => {
                  const stars = <ReactStars
                  onChange={(e) => {return false;}}
                  count={5}
                  value={arr[ind]?.level ? Number(arr[ind]?.level) : 0}
                  size={12}
                  activeColor={'#6DC26C'} />

                  const starsNext = <ReactStars
                  onChange={(e) => {return false;}}
                  count={5}
                  value={arr[ind + 1]?.level ? Number(arr[ind + 1]?.level) : 0}
                  size={12}
                  activeColor={'#6DC26C'} />
                  if(!(ind%2)) {
                     return (
                        <Fragment key={el?.id}>
                           <div className="d-flex flex-wrap justify-content-between align-items-center">
                              <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-start align-items-center">
                                 <div className="resume-main__head-text" style={{fontWeight: 350}}>
                                    {arr[ind]?.name}
                                 </div>
                                 <div className="resume-main__head-text">
                                    {stars}
                                 </div>
                              </div>
                              <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-start align-items-center">
                                 <div className="resume-main__head-text" style={{fontWeight: 350}}>
                                    {arr[ind + 1]?.name}
                                 </div>
                                 <div className="resume-main__head-text">
                                    {starsNext}
                                 </div>
                              </div>
                           </div>
                        </Fragment>
                     );
                  }
               })}
            </CCol>
         </CRow>

         <CRow className="resume-main__row mb-4">
            <CCol className="resume-main__col1">
               <div className="resume-main__label">
                  Social Links</div>
            </CCol>
            <CCol className="resume-main__col2">
               {socials.map(el => (
                  <Fragment key={el?.id}>
                     <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-start align-items-center">
                        <div className="resume-main__title2">
                           {el?.name}
                        </div>
                        <div className="resume-main__head-text">
                           <a href={el?.link} target="_blank" rel="noreferrer"> {el?.link}</a>
                        </div>
                     </div>
                     <div className="resume-main__bottom">
                        <p className="resume-main__info-text">{el?.description}</p>
                     </div>
                  </Fragment>
               ))}
            </CCol>
         </CRow>

         <CRow className="resume-main__row mb-4">
            <CCol className="resume-main__col1">
               <div className="resume-main__label">
                  Hobbies</div>
            </CCol>
            <CCol className="resume-main__col2">
               {hobies.map(el => (
                  <Fragment key={el?.id}>
                     <div className="resume-main__bottom">
                        <p className="resume-main__info-text">{el?.text}</p>
                     </div>
                  </Fragment>
               ))}
            </CCol>
         </CRow>

         <CRow className="resume-main__row mb-4">
            <CCol className="resume-main__col1">
               <div className="resume-main__label">
                  Extra-curricular activities</div>
            </CCol>
            <CCol className="resume-main__col2">
               {activity.map(el => (
                  <Fragment key={el?.id}>
                  <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-between align-items-center">
                     <div className="resume-main__title2">
                        {el?.title}
                     </div>
                     <div className="resume-main__head-text">
                        {el?.employer} {(el?.period_from || el?.period_to) && `(${formatDate(el?.period_from)} - ${formatDate(el?.period_to)})`}
                     </div>
                  </div>
                  <div className="resume-main__bottom">
                     <p className="resume-main__info-text">{el?.description}</p>
                  </div>
               </Fragment>
               ))}
            </CCol>
         </CRow>

         <CRow className="resume-main__row mb-4">
            <CCol className="resume-main__col1">
               <div className="resume-main__label">
                  Courses</div>
            </CCol>
            <CCol className="resume-main__col2">
               {course.map(el => (
                  <Fragment key={el?.id}>
                  <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-between align-items-center">
                     <div className="resume-main__title2">
                        {el?.title}
                     </div>
                     <div className="resume-main__head-text">
                        {el?.institution} {(el?.period_from || el?.period_to) && `(${formatDate(el?.period_from)} - ${formatDate(el?.period_to)})`}
                     </div>
                  </div>
               </Fragment>
               ))}
            </CCol>
         </CRow>

         <CRow className="resume-main__row mb-4">
            <CCol className="resume-main__col1">
               <div className="resume-main__label">
                  Intership</div>
            </CCol>
            <CCol className="resume-main__col2">
               {intership.map(el => (
                  <Fragment key={el?.id}>
                  <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-between align-items-center">
                     <div className="resume-main__title2">
                        {el?.job_title}
                     </div>
                     <div className="resume-main__head-text">
                        {el?.employer} {(el?.period_from || el?.period_to) && `(${formatDate(el?.period_from)} - ${formatDate(el?.period_to)})`}
                     </div>
                  </div>
                  <div className="resume-main__bottom">
                     <p className="resume-main__info-text">{el?.description}</p>
                  </div>
               </Fragment>
               ))}
            </CCol>
         </CRow>

         <CRow className="resume-main__row mb-4">
            <CCol className="resume-main__col1">
               <div className="resume-main__label">
                  Languages</div>
            </CCol>
            <CCol className="resume-main__col2">
               {languages.map((el, ind, arr) => {
                  const stars = <ReactStars
                  onChange={(e) => {return false;}}
                  count={5}
                  value={arr[ind]?.level ? Number(arr[ind]?.level) : 0}
                  size={12}
                  activeColor={'#6DC26C'} />;

                  const starsNext = <ReactStars
                  onChange={(e) => {return false;}}
                  count={5}
                  value={arr[ind + 1]?.level ? Number(arr[ind + 1]?.level) : 0}
                  size={12}
                  activeColor={'#6DC26C'} />;
                  if(!(ind%2)) {
                     return (
                        <Fragment key={el?.id}>
                           <div className="d-flex flex-wrap justify-content-between align-items-center">
                              <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-start align-items-center">
                                 <div className="resume-main__head-text" style={{fontWeight: 350}}>
                                    {arr[ind]?.language}
                                 </div>
                                 <div className="resume-main__head-text">
                                    {stars}
                                 </div>
                              </div>
                              <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-start align-items-center">
                                 <div className="resume-main__head-text" style={{fontWeight: 350}}>
                                    {arr[ind + 1]?.language}
                                 </div>
                                 <div className="resume-main__head-text">
                                    {starsNext}
                                 </div>
                              </div>
                           </div>
                        </Fragment>
                     );
                  }
               })}
            </CCol>
         </CRow>

         <CRow className="resume-main__row mb-4">
            <CCol className="resume-main__col1">
               <div className="resume-main__label">
                  References</div>
            </CCol>
            <CCol className="resume-main__col2">
               {reference.map(el => (
                  <Fragment key={el?.id}>
                  <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-start align-items-center">
                     <div className="resume-main__title2">
                        {el?.full_name}
                     </div>
                     <div className="resume-main__head-text">
                        {el?.company}
                     </div>
                  </div>
                  <div className="resume-main__bottom">
                     <p className="resume-main__info-text">{el?.phone} - {el?.email}</p>
                  </div>
               </Fragment>
               ))}
            </CCol>
         </CRow>

         <CRow className="resume-main__row mb-4">
            <CCol className="resume-main__col1">
               <div className="resume-main__label">
                  Certificates</div>
            </CCol>
            <CCol className="resume-main__col2">
               {certificaties.map(el => (
                  <Fragment key={el?.id}>
                  <div className="resume-main__head-info2 mb-2 d-flex flex-wrap gap-3 justify-content-between align-items-center">
                     <div className="resume-main__title2">
                        {el?.name}
                     </div>
                  </div>
               </Fragment>
               ))}
            </CCol>
         </CRow>



      </div>
   )
}
export default ResumeMain;