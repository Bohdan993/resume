import FormEducation from "./FormEducation";
import HeadMainContent from "../../headMainContent/HeadMainContent";
import { useSelector } from "react-redux";
import './education.scss'


const Education = () => {
   const educations = useSelector((state) => state.education.educations);
   return (
      <>
         <HeadMainContent
            title={'Education'}
            description={"If you've graduated from, or are currently enrolled in a college or university, you should NOT include your high school."}
         >
         </HeadMainContent>
         <FormEducation valuesFromStore={educations} className={`row`}></FormEducation>
      </>
   )
}

export default Education;