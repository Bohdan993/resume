import { formatDate } from "../../../utils";
import {
   CFormInput,
   CCol,
   CRow,
   CFormSelect
} from "@coreui/react";
import Textarea from "../../forms/textarea/TextArea";
import AddButton from "../../forms/addButton/AddButton";
import InputRemove from "../../forms/inputRemove/InputRemove";
import DraggedItem from "../../other/draggedItem/DraggedItem";
import { withForm } from "../../../HOC/withForm";
import { withLogic } from "../../../HOC/withLogic";
import { withFormik } from "formik";


import './education.scss'


const FormEducation = (props) => {

   const {
      handleInput,
      handleSelect,
      handleDelete,
      handleValueAdd: handleEducationAdd,
      handleValueUpdate: handleEducationUpdate,
      dataValues: educations,
      localValue: localEducation,
      selectedValueId: selectedEducationId,
      addText,
      updateText
    } = props;
   return (
      <>
         {
            educations.length ? (      
               <CRow className="mt-4">
                  <CCol>
                  <div className="dragged">
                     {educations.map((education) => (
                        <DraggedItem
                        key={education.id}
                        title={education.facility}
                        onClick={handleSelect.bind(null, education.id)}
                        onDelete={handleDelete.bind(null, education.id)}
                        skillsList={[
                           `${formatDate(education.period_from)} - ${formatDate(
                              education.period_to
                           )}`,
                           education.degree,
                           education.description,
                        ]}
                        selected={education.id === selectedEducationId}
                        />
                     ))}
                  </div>
                  </CCol>
               </CRow>
            ) : null
         }
         <CRow className="row g-30 r-gap-30 mt-4">
            <CCol xs={6}>
               <CFormInput 
                  value={localEducation.facility}
                  type="text" 
                  floatingLabel="Facility" 
                  placeholder="Facility" 
                  onChange={(e)=>handleInput(e, 'facility')}
                  name="facility"
               />
            </CCol>
            <CCol xs={6}>
               <CFormInput 
                  value={localEducation.degree}
                  type="text" 
                  floatingLabel="Degree" 
                  placeholder="Degree"
                  onChange={(e)=>handleInput(e, 'degree')}
                  name="degree"
               />
            </CCol>
            <CCol xs={6}>
               <CRow>
                  <CCol xs={6}>
                     <CFormInput 
                        value={localEducation.period_from}
                        type="date" 
                        floatingLabel="From" 
                        placeholder="From" 
                        onChange={(e)=>handleInput(e, 'period_from')}
                        name="period_from"
                     />
                  </CCol>
                  <CCol xs={6}>
                     <CFormInput 
                           value={localEducation.period_to}
                           type="date" 
                           floatingLabel="To" 
                           placeholder="To" 
                           onChange={(e)=>handleInput(e, 'period_to')}
                           name="period_to"
                        />
                  </CCol>
               </CRow>
            </CCol>
            <CCol xs={6}>
               <CFormInput 
                  value={localEducation.study}
                  type="text" 
                  floatingLabel="Field of study" 
                  placeholder="Field of study" 
                  onChange={(e)=>handleInput(e, 'study')}
                  name="study"
               />
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
               <Textarea
                  value={localEducation.description}
                  onChange={(e)=> handleInput(e, 'description')}
                  name="description"
                  placeholder={'Description of education'}
                  id="educationtTextarea"
               />
            </CCol>
            <CCol xs={12}>
               <AddButton
                  onClick={selectedEducationId ? handleEducationUpdate.bind(null, selectedEducationId) : handleEducationAdd}
                  text={selectedEducationId ? updateText : addText}
               />
            </CCol>
         </CRow>
      </>

   )
}

export default withFormik({ 
   mapPropsToValues: () => {
         const initialValues = { 
           'facility': '',
           'degree': '',
           'period_from': '',
           'peiod_to': '',
           'study': '',
           'description': ''
         }
 
         return initialValues;
   }
 })(withForm(withLogic(FormEducation)));