import { CFormInput, CCol, CRow } from "@coreui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

import { formatDate } from "../../../utils";

import Textarea from "../../forms/textarea/TextArea";
import AddButton from "../../forms/addButton/AddButton";
import DraggedItem from "../../other/draggedItem/DraggedItem";
import { setEmployment, updateEmployment, deleteEmployment, setSelectedEmploymentId } from "../../../slices/employment";
import { withForm } from "../../../HOC/withForm";


const initialState = {
  title: "",
  period_from: formatDate(new Date()),
  period_to: formatDate(new Date()),
  city: "",
  company: "",
  description: "",
  id: uuid()
};

const ADD_ONE_MORE_EMPLOYMENT = 'Add one more employment';
const UPDATE_EMPLOYMENT = 'Update employment';

const FormEmployment = (props) => {

  const dispatch = useDispatch();
  const employments = props.values;
  const selectedEmploymentId = useSelector((state) => state.employment.selectedEmploymentId);
  const [localEmployment, setLocalEmployment] = useState({ ...initialState});

  useEffect(() => {
    const employment = employments.find(employment => employment.id === selectedEmploymentId);

    if(employment) {
      setLocalEmployment(employment);
    } else {
      setLocalEmployment({...initialState, id: uuid()});
    }
  }, [selectedEmploymentId]);

  const handleEmploymentAdd = () => {
    dispatch(setEmployment({...localEmployment, id: uuid()}));
    setLocalEmployment({...initialState, id: uuid()});
  };

  const handleEmploymentUpdate = () => {
    dispatch(updateEmployment(localEmployment));
  }

  const handleSelect = (id) => {
    if(!selectedEmploymentId || selectedEmploymentId !== id) {
      dispatch(setSelectedEmploymentId(id));
    } else {
      dispatch(setSelectedEmploymentId(null));
    }
    
  };

  const handleDelete = (id, e) => {
    e.stopPropagation();
    dispatch(deleteEmployment(id));
    dispatch(setSelectedEmploymentId(null));
  };

  const handleInput = (event, name) => {
    setLocalEmployment((state) => ({ ...state, [name]: event.target.value }));
  };

  return (
    <>
      <CRow>
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
                  employment.city,
                ]}
                selected={employment.id === selectedEmploymentId}
              />
            ))}
          </div>
        </CCol>
      </CRow>
      <div className="row r-gap-30 mt-4">
        <CRow className="g-30 r-gap-30">
          <CCol xs={6}>
            <CFormInput
              value={localEmployment.title}
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
                  value={localEmployment.period_from}
                  onChange={(e)=> handleInput(e, 'period_from')}
                  type="date"
                  floatingLabel="From"
                  placeholder="From"
                  name="period_from"
                />
              </CCol>
              <CCol xs={6}>
                <CFormInput
                  value={localEmployment.period_to}
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
              value={localEmployment.city}
              onChange={(e)=> handleInput(e, 'city')}
              type="text"
              floatingLabel="City"
              placeholder="City"
              name="city"
            />
          </CCol>
          <CCol xs={12}>
            <Textarea
              value={localEmployment.description}
              onChange={(e)=> handleInput(e, 'description')}
              name="description"
            />
          </CCol>
          <CCol xs={12}>
            <AddButton
              onClick={selectedEmploymentId ? handleEmploymentUpdate : handleEmploymentAdd}
              text={selectedEmploymentId ? UPDATE_EMPLOYMENT : ADD_ONE_MORE_EMPLOYMENT}
            />
          </CCol>
        </CRow>
      </div>
    </>
  );
};

export default withForm(FormEmployment);