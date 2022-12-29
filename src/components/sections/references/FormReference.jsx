
import {
   CFormInput,
   CCol,
   CRow,
} from "@coreui/react";
import {useState, useEffect, Fragment} from 'react';
import { withFormik, useFormikContext } from "formik";
import { withForm } from "../../../HOC/withForm";

const referenceArr = [{id: 1}];

const FormReference = ({initialState}) => {

   const { setValues: setFormikValues} = useFormikContext();
   const [localReference, setLocalReference] = useState([]);

   useEffect(() => {
      setFormikValues(localReference);
  }, [localReference, setFormikValues]);



  const handleInput = (event, name, id) => {
   let found = localReference.find(el => el.id === id);

   if(found) {
      setLocalReference((state) => {
         const index = state.findIndex(el => el.id === id);
         const before = state.slice(0, index);
         const after = state.slice(index + 1);
         return [...before, {...found, [name]: event.target.value}, ...after];
      });
   } else {
      setLocalReference((state) => {
         return [...state, {id, [name]: event.target.value}];
      });
   }

};

   return (
      <>
         <CRow className="g-30 r-gap-30">
            {referenceArr.map(reference => {
               return (
                  <Fragment key={reference.id}>
                     <CCol xs={6}>
                     <CFormInput 
                        value={localReference.find(el => el.id === reference.id)?.full_name || ''}
                        type="text" 
                        floatingLabel="Referent Full name" 
                        placeholder="Referent Full name" 
                        onChange={(e)=>handleInput(e, 'full_name', reference.id)}
                     />
                  </CCol>
                  <CCol xs={6}>
                     <CFormInput 
                        value={localReference.find(el => el.id === reference.id)?.company || ''}
                        type="text" 
                        floatingLabel="Company" 
                        placeholder="Company" 
                        onChange={(e)=>handleInput(e, 'company', reference.id)}
                     />
                  </CCol>
                  <CCol xs={6}>
                     <CFormInput 
                        value={localReference.find(el => el.id === reference.id)?.email || ''}
                        type="email" 
                        floatingLabel="E-mail*" 
                        placeholder="Phone" 
                        onChange={(e)=>handleInput(e, 'email', reference.id)}
                     />
                  </CCol>
                  <CCol xs={6}>
                     <CFormInput 
                        value={localReference.find(el => el.id === reference.id)?.phone || ''}
                        type="text" 
                        floatingLabel="Phone" 
                        placeholder="Phone" 
                        onChange={(e)=>handleInput(e, 'phone', reference.id)}
                     />
                  </CCol>
               </Fragment>
               )
            })}

         </CRow>
      </>
   )
}

export default withFormik({ 
   mapPropsToValues: (props) => {
         const initialValues = {};
         return initialValues;
   }
})(withForm(FormReference));