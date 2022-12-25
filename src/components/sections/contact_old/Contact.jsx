import FormContact from "./formContact";
import HeadMainContent from "../../headMainContent/HeadMainContent";
import './contact.scss'

const Contact = () => {

   return (
      <>
         <HeadMainContent
            title={'Contact Section'}
            description={'This information will be placed at the top of your resume.'}
         >
         </HeadMainContent>
         <FormContact></FormContact>
      </>
   )
}

export default Contact;