
import { useState } from "react";
import {
   CForm,
   CFormInput,
   CCol,
   CRow,
   CButton
} from "@coreui/react";

import initialSkills from "./initialSkills";
import ModifyItems from './ModifyItems'

const FormSkill = ({ visibleRating }) => {

   const [skills, setSkils] = useState(initialSkills);
   const selectedItems = skills.filter(({ selected }) => selected === true);
   const notSelectedItems = skills.filter(({ selected }) => selected === false);

   const ratingChanged = (newRating, id) => {
      setSkils(prev => prev.map((item) => id === item.key ? { ...item, rating: newRating } : item));
   };

   const changeItem = (id, e) => {
      e.preventDefault();
      setSkils(prev => prev.map((item) => id === item.key ? { ...item, selected: !item.selected } : item));
   }

   return (
      <CForm className="row r-gap-30 mt-4">
         <CRow className="g-30 r-gap-30">
            {selectedItems.length > 0 ?
               <CCol className="skills__selected-items d-flex gap-3 flex-wrap" xs={12}>
                  <ModifyItems
                     visibleRating={visibleRating}
                     arr={selectedItems}
                     ratingChanged={ratingChanged}
                     changeItem={changeItem} />
               </CCol> : null}
            <CCol xs={12}>
               <div className="skills__title mb-3">
                  Suggested skills
               </div>
               <div className="skills__adding-items d-flex gap-3 flex-wrap">
                  <ModifyItems arr={notSelectedItems} ratingChanged={ratingChanged} changeItem={changeItem} />
               </div>
            </CCol>
         </CRow>

         <CCol className="gap-4 d-flex">
            <CButton className="btn-skip" variant="outline" color="secondary">Skip this step</CButton>
            <CButton color="blue">Continue</CButton>
         </CCol>
      </CForm >
   )
}

export default FormSkill;