
import { useState, useEffect } from "react";
import {
   CCol,
   CRow,
} from "@coreui/react";
import { withFormik, useFormikContext } from "formik";
import { withForm } from "../../../HOC/withForm";
import initialSkills from "./InitialSkills";
import ModifyItems from './ModifyItems'

const selectedItems = initialSkills.filter(({ selected }) => selected === true);
const notSelectedItems = initialSkills.filter(({ selected }) => selected === false);

const FormSkill = ({ visibleRating, ...rest }) => {

   const { setValues: setFormikValues } = useFormikContext();
   const [skills, setSkils] = useState(initialSkills);
   const [localSelectedItems, setSelectedItems] = useState(selectedItems);
   const [localNotSelectedItems, setNotSelectedItems] = useState(notSelectedItems);


   const ratingChanged = (newRating, id) => {
      setSkils(prev => prev.map((item) => id === item.key ? { ...item, rating: newRating } : item));
   };

   const changeItem = (id, e) => {
      e.preventDefault();
      setSkils(prev => prev.map((item) => id === item.key ? { ...item, selected: !item.selected } : item));
   }

   useEffect(() => {
      setFormikValues(localSelectedItems);
      const selectedItems = skills.filter(({ selected }) => selected === true);
      setSelectedItems(selectedItems);
      const notSelectedItems = skills.filter(({ selected }) => selected === false);
      setNotSelectedItems(notSelectedItems);
  }, [skills, setFormikValues]);


   return (
      <>
         <CRow className="g-30 r-gap-30">
            {localSelectedItems.length > 0 ?
               <CCol className="skills__selected-items d-flex gap-3 flex-wrap" xs={12}>
                  <ModifyItems
                     visibleRating={visibleRating}
                     arr={localSelectedItems}
                     ratingChanged={ratingChanged}
                     changeItem={changeItem} />
               </CCol> : null}
            <CCol xs={12}>
               <div className="skills__title mb-3">
                  Suggested skills
               </div>
               <div className="skills__adding-items d-flex gap-3 flex-wrap">
                  <ModifyItems arr={localNotSelectedItems} ratingChanged={ratingChanged} changeItem={changeItem} />
               </div>
            </CCol>
         </CRow>
      </>
   )
}

export default withFormik({ 
   mapPropsToValues: (props) => {
         const initialValues = {};
         return initialValues;
   }
})(withForm(FormSkill));