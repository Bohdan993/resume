
import { useState } from "react";
import {
   CForm,
   CFormInput,
   CCol,
   CRow,
   CButton,
   CFormSelect
} from "@coreui/react";

const FormLanguages = () => {

   return (
      <CForm className="row r-gap-30 mt-4">
         <CRow className="g-30 r-gap-30">
            <CCol xs={6}>
               <CFormInput type="text" floatingLabel="Language" placeholder="Language" />
            </CCol>
            <CCol xs={6}>
               <CFormSelect className="custom-select" >
                  <option>Level</option>
                  <option value="1">Native</option>
                  <option value="2">Two</option>
                  <option value="3" disabled>Three</option>
               </CFormSelect>
            </CCol>
            <CCol xs={6}>
               <CFormInput type="text" floatingLabel="Language" placeholder="Language" />
            </CCol>
            <CCol xs={6}>
               <CFormSelect className="custom-select" >
                  <option>Level</option>
                  <option value="1">Native</option>
                  <option value="2">Two</option>
                  <option value="3" disabled>Three</option>
               </CFormSelect>
            </CCol>
         </CRow>
         <CCol className="gap-4 d-flex">
            <CButton className="btn-skip" variant="outline" color="secondary">Skip this step</CButton>
            <CButton color="blue">Continue</CButton>
         </CCol>
      </CForm>
   )
}

export default FormLanguages;