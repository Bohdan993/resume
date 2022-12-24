import FormEducation from "./FormEducation";
import HeadMainContent from "../../headMainContent/HeadMainContent";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


const Education = () => {

   const educations = useSelector((state) => state.education.educations);
   const [valuesExist, setValuesExist] = useState(false);

   useEffect(()=>{
      if(educations.length) {
         setValuesExist(true);
      } else {
         setValuesExist(false);
      }
   }, [educations])

   return (
      <>
         <HeadMainContent
            title={'Education'}
            description={"If you've graduated from, or are currently enrolled in a college or university, you should NOT include your high school."}
         >
         </HeadMainContent>
         <FormEducation values={educations} valuesExist={valuesExist}></FormEducation>
      </>
   )
}

export default Education;