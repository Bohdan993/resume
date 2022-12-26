import {
   CForm,
   CCol,
   CRow,
   CButton
} from "@coreui/react";
import Textarea from "../../forms/textarea/TextArea";
import { withFormik } from "formik";
import { withForm } from "../../../HOC/withForm";
import { useState } from "react";
import { prewriteList as list } from "../../../utils";

const FormHobies = (props) => {
   const [show, setShow] = useState(false);
   const {
      values,
      handleChange,
      handleBlur,
      setFieldValue
    } = props;

   return (
      <>
         <CRow className="g-30 r-gap-30">
            <CCol xs={12}>
            <Textarea
               onChange={handleChange} onBlur={handleBlur} value={values['first_name']}
               hideButton={false} 
              name="text"
              prewrite={true}
              prewritePopupShow={show}
              prewriteButtonHandler={()=>setShow(prev => !prev)}
              prewriteItems={list}
              placeholder={'Description of hobbie'}
              id="hobiesTextarea"
            />
            </CCol>
         </CRow>
      </>
   )
}


export default withFormik({ 
   mapPropsToValues: (props) => {
         const keys = { 
            "text": ''
         }

         const initialValues = {};

         for (const [name, _] of Object.entries(keys)) {
            initialValues[name] = props.valuesFromStore[name] || '';
          }

         return initialValues;
   }
})(withForm(FormHobies));