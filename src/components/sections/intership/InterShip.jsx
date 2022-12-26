import FormInterShip from "./FormInterShip"
import HeadMainContent from "../../headMainContent/HeadMainContent";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import { formatDate } from "../../../utils";


const initialState = {
   job_title: "",
   period_from: formatDate(new Date()),
   period_to: formatDate(new Date()),
   city: "",
   description: "",
   id: uuid()
 };

const InterShip = () => {
   const interships = useSelector((state) => state.intership.interships);
   const loading = useSelector((state) => state.app.loading);


   if(loading) {
      return null;
   }

   return (
      <>
         <HeadMainContent
            title={'Internship'}
         >
         </HeadMainContent>
         <FormInterShip
            valuesFromStore={interships} 
            className={`row`} 
            initialState={initialState}
            addText="Add one more intership"
            updateText="Update intership"
            skipButton={true}
         ></FormInterShip>
      </>
   )
}

export default InterShip;