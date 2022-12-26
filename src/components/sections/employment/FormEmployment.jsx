import { CFormInput, CCol, CRow } from "@coreui/react";
import { formatDate, prewriteList as list } from "../../../utils";
import Textarea from "../../forms/textarea/TextArea";
import AddButton from "../../forms/addButton/AddButton";
import DraggedItem from "../../other/draggedItem/DraggedItem";
import { withForm } from "../../../HOC/withForm";
import { withFormik } from "formik";
import { withLogic } from "../../../HOC/withLogic";
import { useState } from 'react';


const FormEmployment = (props) => {
  const {
    handleInput,
    handleSelect,
    handleDelete,
    handleValueAdd: handleEmploymentAdd,
    handleValueUpdate: handleEmploymentUpdate,
    dataValues: employments,
    localValue: localEmployment,
    selectedValueId: selectedEmploymentId,
    addText,
    updateText
  } = props;

  const [show, setShow] = useState(false);

  return (
    <>
    {
      employments.length ? ( 
        <CRow className="mt-4">
          <CCol>
            <div className="dragged">
              {employments.map((employment) => (
                <DraggedItem
                  key={employment.id}
                  title={employment.title}
                  onClick={handleSelect.bind(null, employment.id)}
                  onDelete={handleDelete.bind(null, employment.id)}
                  skillsList={[
                    `${formatDate(employment.period_from)} - ${formatDate(
                      employment.period_to
                    )}`,
                    employment.company,
                    employment.country,
                  ]}
                  selected={employment.id === selectedEmploymentId}
                />
              ))}
            </div>
          </CCol>
        </CRow>
        ) : null
      }
        <CRow className="g-30 r-gap-30 mt-4">
          <CCol xs={6}>
            <CFormInput
              value={localEmployment.title || ''}
              onChange={(e)=>handleInput(e, 'title')}
              type="text"
              floatingLabel="Job Title"
              placeholder="Job Title"
              name="title"
            />
          </CCol>
          <CCol xs={6}>
            <CFormInput
              value={localEmployment.company}
              onChange={(e)=> handleInput(e, 'company')}
              type="text"
              floatingLabel="Company / Organization Name"
              placeholder="Company / Organization Name"
              name="company"
            />
          </CCol>
          <CCol xs={6}>
            <CRow>
              <CCol xs={6}>
                <CFormInput
                  value={localEmployment.period_from || ''}
                  onChange={(e)=> handleInput(e, 'period_from')}
                  type="date"
                  floatingLabel="From"
                  placeholder="From"
                  name="period_from"
                />
              </CCol>
              <CCol xs={6}>
                <CFormInput
                  value={localEmployment.period_to || ''}
                  onChange={(e)=> handleInput(e, 'period_to')}
                  type="date"
                  floatingLabel="To"
                  placeholder="To"
                  name="period_to"
                />
              </CCol>
            </CRow>
          </CCol>
          <CCol xs={6}>
            <CFormInput
              value={localEmployment.country || ''}
              onChange={(e)=> handleInput(e, 'country')}
              type="text"
              floatingLabel="Country"
              placeholder="Country"
              name="country"
            />
          </CCol>
          <CCol xs={12}>
            <Textarea
              value={localEmployment.assignment || ''}
              onChange={(e) => handleInput(e, 'assignment')}
              name="assignment"
              prewrite={true}
              prewritePopupShow={show}
              prewriteButtonHandler={()=>setShow(prev => !prev)}
              prewriteItems={list}
              placeholder={'Description of employment'}
              id="employmentTextarea"
            />
          </CCol>
          <CCol xs={12}>
            <AddButton
              onClick={selectedEmploymentId ? handleEmploymentUpdate.bind(null, selectedEmploymentId) : handleEmploymentAdd}
              text={selectedEmploymentId ? updateText : addText}
            />
          </CCol>
        </CRow>
    </>
  );
};

export default withFormik({ 
  mapPropsToValues: () => {
        const initialValues = { 
          'title': '',
          'company': '',
          'period_from': '',
          'peiod_to': '',
          'country': '',
          'assignment': ''
        }

        return initialValues;
  }
})(withForm(withLogic(FormEmployment)));