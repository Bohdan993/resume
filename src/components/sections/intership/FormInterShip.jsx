import { formatDate } from "../../../utils";
import {
   CFormInput,
   CCol,
   CRow,
} from "@coreui/react";
import Textarea from "../../forms/textarea/TextArea";
import AddButton from "../../forms/addButton/AddButton";
import DraggedItem from "../../other/draggedItem/DraggedItem";
import { withForm } from "../../../HOC/withForm";
import { withLogic } from "../../../HOC/withLogic";
import { withFormik } from "formik";


const FormInterShip = (props) => {

   const {
      handleInput,
      handleSelect,
      handleDelete,
      handleValueAdd: handleIntershipAdd,
      handleValueUpdate: handleIntershipUpdate,
      dataValues: interships,
      localValue: localIntership,
      selectedValueId: selectedIntershipId,
      addText,
      updateText
    } = props;

   return (
      <>
         {
            interships.length ? (      
               <CRow className="mt-4">
                  <CCol>
                  <div className="dragged">
                     {interships.map((intership) => (
                        <DraggedItem
                        key={intership.id}
                        title={intership.facility}
                        onClick={handleSelect.bind(null, intership.id)}
                        onDelete={handleDelete.bind(null, intership.id)}
                        skillsList={[
                           `${formatDate(intership.period_from)} - ${formatDate(
                              intership.period_to
                           )}`,
                           intership.degree,
                           intership.description,
                        ]}
                        selected={intership.id === selectedIntershipId}
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
                  value={localIntership.job_title}
                  type="text" 
                  floatingLabel="Job title" 
                  placeholder="Job title" 
                  onChange={(e)=>handleInput(e, 'job_title')}
                  name="job_title"
               />
            </CCol>
            <CCol xs={6}>
               <CFormInput 
                  value={localIntership.employer}
                  type="text" 
                  floatingLabel="Employer" 
                  placeholder="Employer" 
                  onChange={(e)=>handleInput(e, 'employer')}
                  name="employer"
               />
            </CCol>
            <CCol xs={6}>
               <CRow>
                  <CCol xs={6}>
                     <CFormInput 
                        value={localIntership.period_from}
                        type="date" 
                        floatingLabel="From" 
                        placeholder="From" 
                        onChange={(e)=>handleInput(e, 'period_from')}
                        name="period_from"
                     />
                  </CCol>
                  <CCol xs={6}>
                     <CFormInput 
                        value={localIntership.period_to}
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
                  value={localIntership.city}
                  type="text" 
                  floatingLabel="City/country" 
                  placeholder="City/country" 
                  onChange={(e)=>handleInput(e, 'city')}
                  name="city"
               />
            </CCol>
            <CCol xs={12}>
            <Textarea
                  value={localIntership.description}
                  onChange={(e)=> handleInput(e, 'description')}
                  name="description"
                  placeholder={'Description of intership'}
                  id="intershiptTextarea"
               />
            </CCol>
            <CCol xs={12}>
               <AddButton
                  onClick={selectedIntershipId ? handleIntershipUpdate.bind(null, selectedIntershipId) : handleIntershipAdd}
                  text={selectedIntershipId ? updateText : addText}
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
 })(withForm(withLogic(FormInterShip)));