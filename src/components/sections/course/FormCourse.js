
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

const FormCourse = () => {

   return (
      <CForm className="row r-gap-30 mt-4">

         <CRow className="g-30 r-gap-30">
            <CCol xs={6}>
               <CFormInput type="text" floatingLabel="Course title" placeholder="Job Title" />
            </CCol>
            <CCol xs={6}>
               <CFormInput type="text" floatingLabel="Institution" placeholder="Company / Organization Name" />
            </CCol>
            <CCol xs={6}>
               <CRow>
                  <CCol xs={6}>
                     <CFormInput type="date" floatingLabel="From" placeholder="From" />
                  </CCol>
                  <CCol xs={6}>
                     <CFormInput type="date" floatingLabel="To" placeholder="To" />
                  </CCol>
               </CRow>
            </CCol>
            <CCol xs={12}>
               <AddButton text={'Add one more course'} />
            </CCol>
         </CRow>
         <CCol className="gap-4 d-flex">
            <CButton className="btn-skip" variant="outline" color="secondary">Skip this step</CButton>
            <CButton color="blue">Continue</CButton>
         </CCol>
      </CForm>
   )
}

export default FormCourse;