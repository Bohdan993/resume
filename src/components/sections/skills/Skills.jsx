import { useState } from "react";
import { useSelector } from "react-redux";
import HeadMainContent from "../../headMainContent/HeadMainContent";
import FormSkill from './FormSkill.jsx'
import './skill.scss'


const Skills = () => {
   const [visibleRating, setVisibleRating] = useState(true);
   const skills = useSelector((state) => state.skills.skills);
   const loading = useSelector((state) => state.app.loading);

   const changeSwitch = (value) => {
      setVisibleRating(!value);
   }

   if(loading) {
      return null
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
         <FormSkill 
            visibleRating={visibleRating}
            className={`row r-gap-30`}
            skipButton={true}
            valuesFromStore={skills}
         >

         </FormSkill>
      </>
   )
}
export default Skills;