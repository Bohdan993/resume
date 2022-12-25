
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

const FormActivity = (props) => {
   const {
      handleInput,
      handleSelect,
      handleDelete,
      handleValueAdd: handleActivityAdd,
      handleValueUpdate: handleActivityUpdate,
      dataValues: activitys,
      localValue: localActivity,
      selectedValueId: selectedActivityId,
      addText,
      updateText
    } = props;

   return (
      <>
         {
            activitys.length ? (      
               <CRow className="mt-4">
                  <CCol>
                  <div className="dragged">
                     {activitys.map((activity) => (
                        <DraggedItem
                        key={activity.id}
                        title={activity.title}
                        onClick={handleSelect.bind(null, activity.id)}
                        onDelete={handleDelete.bind(null, activity.id)}
                        skillsList={[
                           // `${formatDate(activity.period_from)} - ${formatDate(
                           //    activity.period_to
                           // )}`,
                           activity.degree,
                           activity.facility,
                        ]}
                        selected={activity.id === selectedActivityId}
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
                  value={localActivity.title}
                  type="text" 
                  floatingLabel="Function Title" 
                  placeholder="Job Title" 
                  onChange={(e)=>handleInput(e, 'title')}
                  name="title"
               />
            </CCol>
            <CCol xs={6}>
               <CFormInput 
                  value={localActivity.employer}
                  type="text" 
                  floatingLabel="Employer" 
                  placeholder="Company / Organization Name" 
                  onChange={(e)=>handleInput(e, 'employer')}
                  name="employer"
               />
            </CCol>
            <CCol xs={6}>
               <CRow>
                  <CCol xs={6}>
                  <CFormInput 
                        value={localActivity.period_from}
                        type="date" 
                        floatingLabel="From" 
                        placeholder="From" 
                        onChange={(e)=>handleInput(e, 'period_from')}
                        name="period_from"
                     />
                  </CCol>
                  <CCol xs={6}>
                  <CFormInput 
                           value={localActivity.period_to}
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
                  value={localActivity.city}
                  type="text" 
                  floatingLabel="City" 
                  placeholder="City" 
                  onChange={(e)=>handleInput(e, 'city')}
                  name="city"
               />
            </CCol>
            <CCol xs={12}>
               <Textarea
                  value={localActivity.description}
                  hideButton={true}
                  onChange={(e)=> handleInput(e, 'description')}
                  name="description"
                  placeholder={'Description of activity'}
                  id="activityTextarea"
               />
            </CCol>
            <CCol xs={12}>
               <AddButton
                  onClick={selectedActivityId ? handleActivityUpdate.bind(null, selectedActivityId) : handleActivityAdd}
                  text={selectedActivityId ? updateText : addText}
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
           'employer': '',
           'period_from': '',
           'peiod_to': '',
           'city': '',
           'description': ''
         }
 
         return initialValues;
   }
 })(withForm(withLogic(FormActivity)));