
import { useState } from "react";
import {
   CForm,
   CFormInput,
   CCol,
   CRow,
   CButton,
} from "@coreui/react";

const FormReference = () => {

   return (
      <CForm className="row r-gap-30 mt-4">
         <CRow className="g-30 r-gap-30">
            <CCol xs={6}>
               <CFormInput type="text" floatingLabel="Referent Full name" placeholder="Referent Full name" />
            </CCol>
            <CCol xs={6}>
               <CFormInput type="text" floatingLabel="Company" placeholder="Company" />
            </CCol>
            <CCol xs={6}>
               <CFormInput type="email" floatingLabel="E-mail*" placeholder="Phone" />
            </CCol>
            <CCol xs={6}>
               <CFormInput type="text" floatingLabel="Phone" placeholder="Phone" />
            </CCol>
         </CRow>
         <CCol className="gap-4 d-flex">
            <CButton className="btn-skip" variant="outline" color="secondary">Skip this step</CButton>
            <CButton color="blue">Continue</CButton>
         </CCol>
      </CForm>
   )
}

export default FormReference;