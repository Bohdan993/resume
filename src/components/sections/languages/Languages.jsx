import { useSelector } from "react-redux";
import FormLanguages from "./FormLanguages";
import HeadMainContent from "../../headMainContent/HeadMainContent";

const initialState = {
   language: "",
   level: "",
 };

const Languages = () => {

   const loading = useSelector((state) => state.app.loading);

   if(loading) {
      return null;
   }

   return (
      <>
         <HeadMainContent
            title={'Languages'}
         >
         </HeadMainContent>
         <FormLanguages
            className={`row r-gap-30`}
            skipButton={true}
            initialState={initialState}
         ></FormLanguages>
      </>
   )
}

export default Languages;