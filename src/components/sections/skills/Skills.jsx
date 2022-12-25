import { useState } from "react";
import HeadMainContent from "../../headMainContent/HeadMainContent";
import FormSkill from './FormSkill.jsx'
import './skill.scss'

const Skills = () => {
   const [visibleRating, setVisibleRating] = useState(true);

   const changeSwitch = (value) => {
      setVisibleRating(!value);
   }
   return (
      <>
         <HeadMainContent
            title={'Skills'}
            description={"Try to add 5-10 skills that are most relevant to your desired job."}
            switchOk={"Don't show experience level"}
            changeSwitch={changeSwitch}
         >
         </HeadMainContent>
         <FormSkill visibleRating={visibleRating}></FormSkill>
      </>
   )
}
export default Skills;