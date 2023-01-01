import { CFormInput, CCol, CRow, CFormSelect } from "@coreui/react";
import { formatDate, prewriteList as list } from "../../../utils";
import Textarea from "../../forms/textarea/TextArea";
import AddButton from "../../forms/addButton/AddButton";
import DraggedItem from "../../other/draggedItem/DraggedItem";
import { withForm } from "../../../HOC/withForm";
import { withFormik } from "formik";
import { withLogic } from "../../../HOC/withLogic";
import { useEffect, useState } from 'react';
import { DatePicker } from "../../forms/datePicker/DatePicker";



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
    updateText,
    countries
  } = props;

  const [show, setShow] = useState(false);

  useEffect(()=>{
    setShow(false); 
  }, [selectedEmploymentId]);


  const handleFocus = (e) => {
    setShow(false);
  }

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
                <DatePicker
                  selected={localEmployment.period_from ? new Date(localEmployment.period_from) : localEmployment.period_from}
                  onChange={(e)=> {handleInput(e, 'period_from')}}
                  floatingLabel="From"
                  placeholderText="From"
                  name="period_from"
                  calendarClassName="custom-datepicker"
                  wrapperClassName="custom-datepicker-wrapper"
                  dateFormat="MMM, yyyy"
                  showMonthYearPicker
                  showPopperArrow={false}
                  useShortMonthInDropdown={true}
                />

              </CCol>
              <CCol xs={6}>
                <DatePicker
                  selected={localEmployment.period_to ? new Date(localEmployment.period_to) : localEmployment.period_to}
                  onChange={(e)=> {handleInput(e, 'period_to')}}
                  floatingLabel="To"
                  placeholderText="To"
                  name="period_to"
                  calendarClassName="custom-datepicker"
                  wrapperClassName="custom-datepicker-wrapper"
                  dateFormat="MMM, yyyy"
                  showMonthYearPicker
                  showPopperArrow={false}
                  useShortMonthInDropdown={true}
                />
              </CCol>
            </CRow>
          </CCol>
          <CCol xs={6}>
            <CFormSelect 
                className="custom-select" 
                onChange={(e)=> handleInput(e, 'country')}
                value={localEmployment.country || ''}
                floatingLabel="Country" 
                placeholder="Country" 
                name="country"
              >
                <option disabled value="country">Country</option>
                {countries && countries.map(el => {
                    return (
                      <option key={el?.id} value={el?.name}>{el?.name}</option>
                    );
                })}
              </CFormSelect>
          </CCol>
          <CCol xs={12}>
            <Textarea
              value={localEmployment.assignment || ''}
              onChange={(_, text) => handleInput(null, 'assignment', text)}
              onFocus={handleFocus}
              name="assignment"
              prewrite={true}
              prewritePopupShow={show}
              prewriteButtonHandler={()=>setShow(prev => !prev)}
              prewriteItems={list}
              placeholder={'Description of employment'}
              id="employmentTextarea"
              currentValueId={selectedEmploymentId}
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