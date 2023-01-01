import { useSelector } from "react-redux";
import FormLanguages from "./FormLanguages";
import HeadMainContent from "../../headMainContent/HeadMainContent";
import uuid from 'react-uuid';

 const initialState = [{
   language: "",
   level: "",
   id: uuid()
 }];


const Languages = () => {
   const languages = useSelector(state => state.languages.languagess);
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
            valuesFromStore={languages}
            buttonClassName="gap-4 d-flex"
         ></FormLanguages>
      </>
   )
}

export default Languages;