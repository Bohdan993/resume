import {
   CSidebar,
   CSidebarNav,
   CNavItem,
} from "@coreui/react"

import { NavLink } from "react-router-dom";

import { ReactComponent as ContactIcon } from '../../images/icons/contact.svg'
import { ReactComponent as EmploymentIcon } from '../../images/icons/employment.svg'
import { ReactComponent as EducationIcon } from '../../images/icons/education.svg'
import { ReactComponent as SkillsIcon } from '../../images/icons/skills.svg'
import { ReactComponent as SocialIcon } from '../../images/icons/social.svg'
import { ReactComponent as HobbiesIcon } from '../../images/icons/hobies.svg'
import { ReactComponent as ActivityIcon } from '../../images/icons/activities.svg'
import { ReactComponent as CoursesIcon } from '../../images/icons/courses.svg'
import { ReactComponent as InternshipIcon } from '../../images/icons/intership.svg'
import { ReactComponent as LanguagesIcon } from '../../images/icons/languages.svg'
import { ReactComponent as ReferencesIcon } from '../../images/icons/references.svg'
import { ReactComponent as CertificationsIcon } from '../../images/icons/certifications.svg'
import { ReactComponent as HelpIcon } from '../../images/icons/chat.svg'
import vars from './varsStyle'
import './sideBar.scss'

const SideBar = () => {

   return (
      <CSidebar style={vars}>
         <a className="nav-logo">
            Res<span>Tamplate</span>
         </a>
         <CSidebarNav>
            <CNavItem>
               <NavLink className='nav-link' to="/" >
                  <ContactIcon className="nav-icon" />
                  Contact
               </NavLink>
            </CNavItem>
            <CNavItem>
               <NavLink className='nav-link' to="/employment" >
                  <EmploymentIcon className="nav-icon" />
                  Employment
               </NavLink>
            </CNavItem>
            <CNavItem>
               <NavLink className='nav-link' to="/education" >
                  <EducationIcon className="nav-icon" />
                  Education
               </NavLink>
            </CNavItem>
            <CNavItem>
               <NavLink className='nav-link' to="/skills" >
                  <SkillsIcon className="nav-icon" />
                  Skills
               </NavLink>
            </CNavItem>
            <CNavItem>
               <NavLink className='nav-link' to="/socials" >
                  <SocialIcon className="nav-icon" />
                  Social Links
               </NavLink>
            </CNavItem>
            <CNavItem>
               <NavLink className='nav-link' to="/hobies" >
                  <HobbiesIcon className="nav-icon" />
                  Hobbies
               </NavLink>
            </CNavItem>
            <CNavItem>
               <NavLink className='nav-link' to="/activity" >
                  <ActivityIcon className="nav-icon" />
                  Extra-curricular activities
               </NavLink>
            </CNavItem>
            <CNavItem>
               <NavLink className='nav-link' to="/course" >
                  <CoursesIcon className="nav-icon" />
                  Courses
               </NavLink>
            </CNavItem>
            <CNavItem>
               <NavLink className='nav-link' to="/intership" >
                  <InternshipIcon className="nav-icon" />
                  Internship
               </NavLink>
            </CNavItem>
            <CNavItem>
               <NavLink className='nav-link' to="/languages" >
                  <LanguagesIcon className="nav-icon" />
                  Languages
               </NavLink>
            </CNavItem>
            <CNavItem>
               <NavLink className='nav-link' to="/reference" >
                  <ReferencesIcon className="nav-icon" />
                  References
               </NavLink>
            </CNavItem>
            <CNavItem>
               <NavLink className='nav-link' to="/certificaties" >
                  <CertificationsIcon className="nav-icon" />
                  Certifications
               </NavLink>
            </CNavItem>
         </CSidebarNav>
         <div className="nav-help">
            <a href="" className="nav-help-link">
               {<HelpIcon />}
               Need help?
            </a>
         </div>
      </CSidebar>
   )
}
export default SideBar;