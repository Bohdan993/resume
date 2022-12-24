import FormEmployment from "./FormEmployment";
import HeadMainContent from "../../headMainContent/HeadMainContent";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import './employment.scss'



const Employment = () => {

   const employments = useSelector((state) => state.employment.employments);
   const [valuesExist, setValuesExist] = useState(false);

   useEffect(()=>{
      if(employments.length) {
         setValuesExist(true);
      } else {
         setValuesExist(false);
      }
   }, [employments])

   return (
      <>
         <HeadMainContent
            title={'Employment History'}
         >
         </HeadMainContent>
         <FormEmployment values={employments} valuesExist={valuesExist}></FormEmployment>
      </>
   )
}

export default Employment;