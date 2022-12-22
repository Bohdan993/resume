
import { useState } from "react";
import {
   CForm,
   CFormInput,
   CCol,
   CRow,
   CButton,
   CFormSelect
} from "@coreui/react";
import Textarea from "../../forms/textarea/TextArea";
import AddButton from "../../forms/addButton/AddButton";
import InputRemove from "../../forms/inputRemove/InputRemove";
import { ReactComponent as DeleteIcon } from '../../../images/icons/delete.svg'
import { ReactComponent as DragIcon } from '../../../images/icons/many-dots.svg'
import './education.scss'

const FormEducation = () => {

   return (
      <>
         <CRow>
            <CCol>
               <div className="education d-grid gap-2 my-3">
                  <div className="education__item p-3 d-flex justify-content-between align-items-center gap-2 ">
                     <span className="education__drag w-20">
                        <DragIcon />
                     </span>
                     <div className="education__content w-100">
                        <div className="education__title mb-2">
                           National Academy of Fine Arts and Architecture
                        </div>
                        <CRow className="">
                           <CCol xs="auto">
                              <span>Feb 2014 - Mar 2018</span>
                           </CCol>
                           <CCol xs="auto">
                              <span>Master</span>
                           </CCol>
                           <CCol xs="auto">
                              <span>Design (graphic)</span>
                           </CCol>
                        </CRow>
                     </div>
                     <span className="education__delete">
                        <DeleteIcon />
                     </span>
                  </div>
               </div>
            </CCol>
         </CRow>

         <CForm className="row r-gap-30 mt-4">
            <CRow className="g-30 r-gap-30">
               <CCol xs={6}>
                  <CFormInput type="text" floatingLabel="Facility" placeholder="Facility" />
               </CCol>
               <CCol xs={6}>
                  <CFormInput type="text" floatingLabel="Degree" placeholder="Degree" />
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
               <CCol xs={6}>
                  <CFormInput type="text" floatingLabel="Field of study" placeholder="Field of study" />
               </CCol>
               <CCol xs={6}>
                  <InputRemove></InputRemove>
               </CCol>
               <CCol xs={6}>
                  <CFormSelect className="custom-select" >
                     <option>Open this select menu</option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3" disabled>Three</option>
                  </CFormSelect>
               </CCol>
               <CCol xs={12}>
                  <Textarea />
               </CCol>
               <CCol xs={12}>
                  <AddButton text={'Add one more employment'} />
               </CCol>
            </CRow>
            <CCol>
               <CButton color="blue">Continue</CButton>
            </CCol>
         </CForm>
      </>

   )
}

export default FormEducation;