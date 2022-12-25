import HeadMainContent from "../../headMainContent/HeadMainContent";
import FormActivity from "./FormActivity";
import { useSelector } from "react-redux";
import { formatDate } from "../../../utils";
import uuid from "react-uuid";


const initialState = {
   title: "",
   employer: "",
   period_from: formatDate(new Date()),
   period_to: formatDate(new Date()),
   city: "",
   description: "",
   id: uuid()
 };

const Activity = () => {
   const activitys = useSelector((state) => state.activity.activitys);
   return (
      <>
         <HeadMainContent
            title={'Extra-curricular activities'}
         >
         </HeadMainContent>
         <FormActivity
            valuesFromStore={activitys} 
            className={`row`} 
            initialState={initialState}
            addText="Add one more activity"
            updateText="Update activity"
            skipButton={true}
         >
         </FormActivity>
      </>
   )
}

export default Activity;