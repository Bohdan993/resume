import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import HeadMainContent from "../../headMainContent/HeadMainContent";
import FormHobies from "./FormHobies";

const Hobies = () => {

   const hobies = useSelector((state) => state.hobies.hobies);
   const loading = useSelector((state) => state.app.loading);

   const [valuesExist, setValuesExist] = useState(false);

   // useEffect(()=>{
   //    if(Object.values(hobies).some(el => el !== '')) {
   //       setValuesExist(true);
   //    } else {
   //       setValuesExist(false);
   //    }
   // }, [hobies]);

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
            valuesExist={valuesExist} 
            valuesFromStore={hobies} 
            className={`row r-gap-30`}
            skipButton={true}
         >
         </FormHobies>
      </>
   )
}

export default Hobies;