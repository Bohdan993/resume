import HeadMainContent from "../../headMainContent/HeadMainContent";
import FormReference from "./FormReference";

const initialState = {
   full_name: "",
   company: "",
   phone: "",
   email: ""
 };

const Reference = () => {

   return (
      <>
         <HeadMainContent
            title={'References'}
         >
         </HeadMainContent>
         <FormReference
            className={`row r-gap-30`}
            skipButton={true}
            initialState={initialState}
         ></FormReference>
      </>
   )
}

export default Reference;