import FormContact from "./FormContact";
import HeadMainContent from "../../headMainContent/HeadMainContent";
import './contact.scss'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const Contact = () => {

   const contact = useSelector((state) => state.contact.contact);
   const loading = useSelector((state) => state.app.loading);

   const [valuesExist, setValuesExist] = useState(false);

   useEffect(()=>{
      if(Object.values(contact).some(el => el !== '')) {
         setValuesExist(true);
      } else {
         setValuesExist(false);
      }
   }, [contact]);

   if(loading) {
      return null
   }

   return (
      <>
         <HeadMainContent
            title={'Contact Section'}
            description={'This information will be placed at the top of your resume.'}
         >
         </HeadMainContent>
         <FormContact valuesExist={valuesExist} valuesFromStore={contact} className={`row r-gap-30`}></FormContact>
      </>
   )
}

export default Contact;