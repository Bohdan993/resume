
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

const FormCertificaties = () => {

   const [inputs, setInputs] = useState([{ name: "", key: uuid() }]);

   const handleChange = (index, event) => {
      let newInputs = inputs.map((input, indexCurrent) => {
         if (indexCurrent !== index) return input;
         return { ...input, name: event.target.value };
      });
      if (index === inputs.length - 1) {
         newInputs = newInputs.concat([{ name: "", key: uuid() }]);
      }
      setInputs(newInputs);
   };
   const items = inputs.map((item, index) => {
      return (
         <CCol key={item.key} xs={6} >
            <CFormInput type="text" value={item.name} placeholder={`Licence / Certification ${index + 1}#`} onChange={e => handleChange(index, e)} />
         </CCol>
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

export default FormCertificaties;