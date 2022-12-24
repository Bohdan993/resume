import FormEmployment from "./FormEmployment";
import HeadMainContent from "../../headMainContent/HeadMainContent";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './employment.scss'




const Employment = () => {
   const employments = useSelector((state) => state.employment.employments);
   return (
      <>
         <HeadMainContent
            title={'Employment History'}
         >
         </HeadMainContent>
         <FormEmployment valuesFromStore={employments}></FormEmployment>
      </>
   )
}

export default Employment;