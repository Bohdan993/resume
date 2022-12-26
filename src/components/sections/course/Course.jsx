import HeadMainContent from "../../headMainContent/HeadMainContent";
import FormCourse from "./FormCourse";
import { useSelector } from "react-redux";
import { formatDate } from "../../../utils";
import uuid from "react-uuid";

const initialState = {
   title: "",
   institution: "",
   period_from: formatDate(new Date()),
   period_to: formatDate(new Date()),
   id: uuid()
 };


const Course = () => {
   const courses = useSelector((state) => state.course.courses);
   const loading = useSelector((state) => state.app.loading);

   if(loading) {
      return null
   }

   return (
      <>
         <HeadMainContent
            title={'Courses'}
         >
         </HeadMainContent>
         <FormCourse
            valuesFromStore={courses} 
            className={`row`} 
            initialState={initialState}
            addText="Add one more course"
            updateText="Update course"
            skipButton={true}
         ></FormCourse>
      </>
   )
}

export default Course;