
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

import { setEducation, updateEducation, deleteEducation, setSelectedEducationId } from "../../../slices/education";
import { withForm } from "../../../HOC/withForm";

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

   const dispatch = useDispatch();
   const educations = props.values;
   const selectedEducationId = useSelector((state) => state.education.selectedEducationId);
   const [localEducation, setLocalEducation] = useState({ ...initialState});
 
   useEffect(() => {
     const education = educations.find(education => education.id === selectedEducationId);
 
     if(education) {
       setLocalEducation(education);
     } else {
       setLocalEducation({...initialState, id: uuid()});
     }
   }, [selectedEducationId]);
 
   const handleEducationAdd = () => {
     dispatch(setEducation({...localEducation, id: uuid()}));
     setLocalEducation({...initialState, id: uuid()});
   };
 
   const handleEducationUpdate = () => {
     dispatch(updateEducation(localEducation));
   }
 
   const handleSelect = (id) => {
     if(!selectedEducationId || selectedEducationId !== id) {
       dispatch(setSelectedEducationId(id));
     } else {
       dispatch(setSelectedEducationId(null));
     }
     
   };
 
   const handleDelete = (id, e) => {
     e.stopPropagation();
     dispatch(deleteEducation(id));
     dispatch(setSelectedEducationId(null));
   };
 
   const handleInput = (event, name) => {
     setLocalEducation((state) => ({ ...state, [name]: event.target.value }));
   };
   return (
      <>
      <CRow>
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

            <CRow className="g-30 r-gap-30">
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
              onClick={selectedEducationId ? handleEducationUpdate : handleEducationAdd}
              text={selectedEducationId ? UPDATE_EDUCATION : ADD_ONE_MORE_EDUCATION}
            />
               </CCol>
            </CRow>
      </>

   )
}

export default withForm(FormEducation);