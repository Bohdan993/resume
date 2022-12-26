import FormEducation from "./FormEducation";
import HeadMainContent from "../../headMainContent/HeadMainContent";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import { formatDate } from "../../../utils";
import './education.scss';



const initialState = {
   facility: "",
   period_from: formatDate(new Date()),
   period_to: formatDate(new Date()),
   degree: "",
   study: "",
   awards: "",
   description: "",
   id: uuid()
 };


const Education = () => {

   const educations = useSelector((state) => state.education.educations);
   const loading = useSelector((state) => state.app.loading);

   if(loading) {
      return null
   }


   return (
      <>
         <HeadMainContent
            title={'Education'}
            description={"If you've graduated from, or are currently enrolled in a college or university, you should NOT include your high school."}
         >
         </HeadMainContent>
         <FormEducation 
            valuesFromStore={educations} 
            className={`row`} 
            initialState={initialState}
            addText="Add one more education"
            updateText="Update education"
         >
         </FormEducation>
      </>
   )
}

export default Education;