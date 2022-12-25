
import { useState } from "react";
import {
   CForm,
   CFormInput,
   CCol,
   CRow,
   CButton
} from "@coreui/react";
import { useNavigate } from "react-router-dom"
import Textarea from "../../forms/textarea/TextArea";
import AddButton from "../../forms/addButton/AddButton";

const FormHobies = () => {

   return (
      <CForm className="row r-gap-30 mt-4">
         <CRow className="g-30 r-gap-30">
            <CCol xs={12}>
               <Textarea 
                  hideButton={false} 
                  prewrite={true} 
                  placeholder={'Description of hobbie'}
                  id="hobiesTextarea"
               />
            </CCol>
         </CRow>
         <CCol className="gap-4 d-flex">
            <CButton className="btn-skip" variant="outline" color="secondary">Skip this step</CButton>
            <CButton color="blue">Continue</CButton>
         </CCol>
      </CForm>
   )
}

export default FormHobies;