import { useState } from "react";
import { useSelector } from "react-redux";
import HeadMainContent from "../../headMainContent/HeadMainContent";
import FormHobies from "./FormHobies";

const initialState = {
   text: "",
 };


const Hobies = () => {

   const hobies = useSelector((state) => state.hobies.hobiess);
   const loading = useSelector((state) => state.app.loading);

   if(loading) {
      return null
   }

   return (
      <>
         <HeadMainContent
            title={'Hobbies'}
            description={'What do you like?'}
         >
         </HeadMainContent>
         <FormHobies
            valuesFromStore={hobies} 
            className={`row r-gap-30`}
            skipButton={true}
            initialState={initialState}
         >
         </FormHobies>
      </>
   )
}

export default Hobies;