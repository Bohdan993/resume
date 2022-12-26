import { formatDate } from "../../../utils";
import {
   CForm,
   CFormInput,
   CCol,
   CRow
} from "@coreui/react";
import DraggedItem from "../../other/draggedItem/DraggedItem";
import AddButton from "../../forms/addButton/AddButton";
import { withForm } from "../../../HOC/withForm";
import { withLogic } from "../../../HOC/withLogic";
import { withFormik } from "formik";

const FormCourse = (props) => {

   const {
      handleInput,
      handleSelect,
      handleDelete,
      handleValueAdd: handleCourseAdd,
      handleValueUpdate: handleCourseUpdate,
      dataValues: courses,
      localValue: localCourse,
      selectedValueId: selectedCourseId,
      addText,
      updateText
    } = props;

   return (
      <>
         {
            courses.length ? (      
               <CRow className="mt-4">
                  <CCol>
                  <div className="dragged">
                     {courses.map((course) => (
                        <DraggedItem
                        key={course.id}
                        title={course.title}
                        onClick={handleSelect.bind(null, course.id)}
                        onDelete={handleDelete.bind(null, course.id)}
                        skillsList={[
                           `${formatDate(course.period_from)} - ${formatDate(
                              course.period_to
                           )}`,
                           course.degree,
                           course.facility,
                        ]}
                        selected={course.id === selectedCourseId}
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
                     value={localCourse.title}
                     type="text" 
                     floatingLabel="Course Title" 
                     placeholder="Course Title" 
                     onChange={(e)=>handleInput(e, 'title')}
                     name="title" 
               />
            </CCol>
            <CCol xs={6}>
               <CFormInput                   
                     value={localCourse.institution}
                     type="text" 
                     floatingLabel="Institution" 
                     placeholder="Institution" 
                     onChange={(e)=>handleInput(e, 'institution')}
                     name="institution" 
                  />
            </CCol>
            <CCol xs={6}>
               <CRow>
                  <CCol xs={6}>
                     <CFormInput                         
                        value={localCourse.period_from}
                        type="date" 
                        floatingLabel="From" 
                        placeholder="From" 
                        onChange={(e)=>handleInput(e, 'period_from')}
                        name="period_from" />
                  </CCol>
                  <CCol xs={6}>
                     <CFormInput                            
                           value={localCourse.period_to}
                           type="date" 
                           floatingLabel="To" 
                           placeholder="To" 
                           onChange={(e)=>handleInput(e, 'period_to')}
                           name="period_to" />
                  </CCol>
               </CRow>
            </CCol>
            <CCol xs={12}>
               <AddButton
                  onClick={selectedCourseId ? handleCourseUpdate.bind(null, selectedCourseId) : handleCourseAdd}
                  text={selectedCourseId ? updateText : addText}
               />
            </CCol>
         </CRow>
      </>
   )
}

export default withFormik({ 
   mapPropsToValues: () => {
         const initialValues = { 
           'title': '',
           'institution': '',
           'period_from': '',
           'peiod_to': '',
         }
 
         return initialValues;
   }
 })(withForm(withLogic(FormCourse)));