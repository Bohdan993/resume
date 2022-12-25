import HeadMainContent from "../../headMainContent/HeadMainContent";
import FormCertificaties from "./FormCertificaties";

const Certificaties = () => {

   return (
      <>
         <HeadMainContent
            title={'Certificates'}
            description={'Enter your licenses or certifications one at a time.'}
         >
         </HeadMainContent>
         <FormCertificaties></FormCertificaties>
      </>
   )
}

export default Certificaties;