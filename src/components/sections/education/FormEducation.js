
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-uuid";
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
import { useFormikContext, withFormik } from "formik";

import './education.scss'

const initialState = {
   
   facility: "",
   period_from: formatDate(new Date()),
   period_to: formatDate(new Date()),
   degree: "",
   study: "",
   awards: "",
   description: "",
   id: uuid()
 };

const ADD_ONE_MORE_EDUCATION = 'Add one more education';
const UPDATE_EDUCATION = 'Update education';

const FormEducation = (props) => {

   const { setValues } = useFormikContext();
   const storeEducations = props.valuesFromStore;
   const [selectedEducationId, setSelectedEducationId ]= useState(null);
   const [localEducation, setLocalEducation] = useState({ ...initialState});
   const [educations, setEducations] = useState(storeEducations);
 
   useEffect(() => {
     const education = educations.find(education => education.id === selectedEducationId);
 
     if(education) {
       setLocalEducation(education);
     } else {
       setLocalEducation({...initialState, id: uuid()});
     }
   }, [selectedEducationId]);
 
   useEffect(() => {
     setValues(educations);
   }, [educations, setValues]);
 
 
   const handleEducationAdd = (e) => {
     e.preventDefault();
     setEducations(prev => {
       return [...prev, {...localEducation, id: uuid()}];
     })
     setLocalEducation({...initialState, id: uuid()});
   };
 
   const handleEducationUpdate = (id, e) => {
     e.preventDefault();
     setEducations(prev => {
       const index = prev.findIndex(el => el.id === id);
       const before = prev.slice(0, index);
       const after = prev.slice(index + 1);
       return [...before, {...localEducation}, ...after];
     })
   }
 
   const handleSelect = (id) => {
     if(!selectedEducationId || selectedEducationId !== id) {
       setSelectedEducationId(id);
     } else {
       setSelectedEducationId(null);
     }
     
   };
 
   const handleDelete = (id, e) => {
       e.stopPropagation();
       setEducations(prev => {
         return prev.filter(el => el.id !== id);
       })
       setSelectedEducationId(null);
   };
 
   const handleInput = (event, name) => {
     setLocalEducation((state) => ({ ...state, [name]: event.target.value }));
   };
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
                           education.facility,
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
               name="assignment"
               />
            </CCol>
            <CCol xs={12}>
            <AddButton
            onClick={selectedEducationId ? handleEducationUpdate.bind(null, selectedEducationId) : handleEducationAdd}
            text={selectedEducationId ? UPDATE_EDUCATION : ADD_ONE_MORE_EDUCATION}
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
 })(withForm(FormEducation));