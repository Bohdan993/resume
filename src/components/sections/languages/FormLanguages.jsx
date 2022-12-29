
import {
   CFormInput,
   CCol,
   CRow,
   CFormSelect
} from "@coreui/react";
import { withFormik, useFormikContext } from "formik";
import { withForm } from "../../../HOC/withForm";
import {useState, useEffect, Fragment} from 'react';


const languageArr = [{id: 1}, {id: 2}];

const FormLanguages = () => {
   const { setValues: setFormikValues} = useFormikContext();
   const [localLanguages, setLocalLanguages] = useState([]);

   useEffect(() => {
      setFormikValues(localLanguages);
  }, [localLanguages, setFormikValues]);



  const handleInput = (event, name, id) => {
      let found = localLanguages.find(el => el.id === id);

      if(found) {
         setLocalLanguages((state) => {
            const index = state.findIndex(el => el.id === id);
            const before = state.slice(0, index);
            const after = state.slice(index + 1);
            return [...before, {...found, [name]: event.target.value}, ...after];
         });
      } else {
         setLocalLanguages((state) => {
            return [...state, {id, [name]: event.target.value}];
         });
      }

   };

   return (
      <>
         <CRow className="g-30 r-gap-30">
            {languageArr.map(language => {
               return (
                  <Fragment key={language.id}>
                     <CCol xs={6}>
                        <CFormInput
                           value={localLanguages.find(el => el.id === language.id)?.language || ''}
                           type="text" 
                           floatingLabel="Language" 
                           placeholder="Language" 
                           onChange={(e)=>handleInput(e, 'language', language.id)}
                        />
                     </CCol>
                     <CCol xs={6}>
                        <CFormSelect className="custom-select" 
                           value={localLanguages.find(el => el.id === language.id)?.level || ''}
                           onChange={(e)=>handleInput(e, 'level', language.id)}
                        >
                           <option>Level</option>
                           <option value="1">Native</option>
                           <option value="2">Two</option>
                           <option value="3" disabled>Three</option>
                        </CFormSelect>
                     </CCol>
                  </Fragment>
               );
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
})(withForm(FormLanguages));