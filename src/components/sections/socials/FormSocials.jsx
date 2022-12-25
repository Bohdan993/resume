
import { useState, useEffect, useRef } from "react";
import {
   CForm,
   CFormInput,
   CCol,
   CRow,
   CButton
} from "@coreui/react";
import uuid from 'react-uuid';
import { useNavigate } from "react-router-dom"

const FormSocials = () => {

   const [inputs, setInputs] = useState([{
      label: '',
      link: '',
      key: uuid()
   }]);

   const handleChange = (index, event) => {
      let newInputs = inputs.map((input, indexCurrent) => {
         if (indexCurrent !== index) return input;
         return { ...input, label: event.target.value };
      });
      if (index === inputs.length - 1) {
         newInputs = newInputs.concat([{ label: '', link: '', key: uuid() }]);
      }
      setInputs(newInputs);
   };
   const items = inputs.map((item, index) => {
      return (
         <CRow key={item.key} >
            <CCol xs={6} >
               <CFormInput type="text" value={item.name} placeholder='Label' onChange={e => handleChange(index, e)} />
            </CCol>
            <CCol xs={6} >
               {item.label.trim().length > 0 ? <CFormInput type="text" value={item.name} placeholder='Link' onChange={e => handleChange(index, e)} /> : null}
            </CCol>
         </CRow>

      )
   })

   return (
      <CForm className="row r-gap-30 mt-4">
         <CRow className="g-30 r-gap-30">
            {items}
         </CRow>
         <CCol className="gap-4 d-flex">
            <CButton className="btn-skip" variant="outline" color="secondary">Skip this step</CButton>
            <CButton color="blue">Continue</CButton>
         </CCol>
      </CForm>
   )
}

export default FormSocials;