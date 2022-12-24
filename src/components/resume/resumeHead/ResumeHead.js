import { ReactComponent as SavedIcon } from '../../../images/icons/saved.svg'
import { ReactComponent as ArrowLeftIcon } from '../../../images/icons/arrow-left.svg'
import { ReactComponent as ArrowRightIcon } from '../../../images/icons/arrow-right.svg'
import { ReactComponent as ArrowProfileIcon } from '../../../images/icons/arrow-profile.svg'
import avatar from '../../../images/other/avatar-small.png';
import './resumeHead.scss'
import { useSelector } from 'react-redux';


const ResumeHead = () => {
   const contact = useSelector((state) => state.contact.contact);
   return (
      <div className="resume-head">
         <div className="resume-head__status">
            <SavedIcon />
            Saved
         </div>
         <div className="resume-head__pagination">
            <button className="resume-head__pagination-button">
               <ArrowLeftIcon />
            </button>
            <p>1/2</p>
            <button className="resume-head__pagination-button">
               <ArrowRightIcon />
            </button>
         </div>
         <div className="resume-head__profile">
            <div className="resume-head__avatar-img">
               <img src={contact?.picture || avatar} alt="" />
            </div>
            <button className="resume-head__profile-arrow">
               <ArrowProfileIcon />
            </button>
         </div>
      </div>

   )
}
export default ResumeHead;