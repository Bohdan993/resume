import FormEmployment from "./FormEmployment";
import HeadMainContent from "../../headMainContent/HeadMainContent";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import { formatDate } from "../../../utils";
import './employment.scss'

const initialState = {
   title: "",
   period_from: formatDate(new Date()),
   period_to: formatDate(new Date()),
   city: "",
   company: "",
   description: "",
   id: uuid()
 };
 

const Employment = () => {

   const employments = useSelector((state) => state.employment.employments);
   const loading = useSelector((state) => state.app.loading);

   if(loading) {
      return null
   }

   return (
      <>
         <HeadMainContent
            title={'Employment History'}
         >
         </HeadMainContent>
         <FormEmployment 
            valuesFromStore={employments} 
            className={`row`} 
            initialState={initialState}
            addText="Add one more employment"
            updateText="Update employment"
         >

         </FormEmployment>
      </>
   )
}

export default Employment;