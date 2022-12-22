import ResumeHead from './resumeHead/ResumeHead'
import ResumeMain from './resumeMain/ResumeMain'
import ResumeFooter from './resumeFooter/ResumeFooter'
import { CCol } from '@coreui/react';
import './resume.scss'



const Resume = () => {

   return (
      <CCol className='resume'>
         <ResumeHead></ResumeHead>
         <ResumeMain></ResumeMain>
         <ResumeFooter></ResumeFooter>
      </CCol>

   )

}
export default Resume;