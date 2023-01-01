import FormContact from "./FormContact";
import HeadMainContent from "../../headMainContent/HeadMainContent";
import { useSelector } from "react-redux";
import './contact.scss';

import ContactNew from '../contact/Contact';


const Contact = () => {

   const contact = useSelector((state) => state.contact.contact);
   const loading = useSelector((state) => state.app.loading);


   if(loading) {
      return null;
   }

   return (
      <>
         {
            contact?.id ? 
               (
                  <ContactNew/>
               ) 
            : 
               (
                  <>
                     <HeadMainContent
                        title={'Contact Section'}
                        description={'This information will be placed at the top of your resume.'}
                     />
                     <FormContact/>
                  </>
               )
         }
      </>

   )
}

export default Contact;