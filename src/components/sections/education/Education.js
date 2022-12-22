import FormEducation from "./FormEducation";
import HeadMainContent from "../../headMainContent/HeadMainContent";

const Education = () => {
   return (
      <>
         <HeadMainContent
            title={'Education'}
            description={"If you've graduated from, or are currently enrolled in a college or university, you should NOT include your high school."}
         >
         </HeadMainContent>
         <FormEducation></FormEducation>
      </>
   )
}

export default Education;