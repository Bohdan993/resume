import HeadMainContent from "../../headMainContent/HeadMainContent";
import FormCertificaties from "./FormCertificaties";
import { useSelector } from "react-redux";
import uuid from 'react-uuid';

const initialState = [{
   name: "",
   id: uuid()
 }];


const Certificaties = () => {
   const loading = useSelector((state) => state.app.loading);
   const certificaties = useSelector(state => state.certificaties.certificatiess);

   if(loading) {
      return null;
   }

   return (
      <>
         <HeadMainContent
            title={'Certificates'}
            description={'Enter your licenses or certifications one at a time.'}
         >
         </HeadMainContent>
         <FormCertificaties
            className={`row r-gap-30`}
            skipButton={true}
            initialState={initialState}
            valuesFromStore={certificaties}
            buttonClassName="gap-4 d-flex"
         ></FormCertificaties>
      </>
   )
}

export default Certificaties;