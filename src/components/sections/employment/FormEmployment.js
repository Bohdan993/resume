import { CFormInput, CCol, CRow } from "@coreui/react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

import { formatDate } from "../../../utils";

import Textarea from "../../forms/textarea/TextArea";
import AddButton from "../../forms/addButton/AddButton";
import DraggedItem from "../../other/draggedItem/DraggedItem";
import { setEmployment, deleteEmployment } from "../../../slices/employment";


const initialState = {
  title: "",
  period_from: "",
  period_to: "",
  city: "",
  company: "",
  description: "",
};

const FormEmployment = () => {
  const storeEmployments = useSelector((state) => state.employment.employments);
  const [employments, setEmployments] = useState(storeEmployments);
  const [selected, setSelected] = useState({ ...initialState, id: uuid() });

  useEffect(() => {
  }, [employments]);

  const handleEmployment = () => {
    const employmentIdx = employments.findIndex((el) => el.id === selected.id);

    if (employmentIdx === -1) {
      setEmployments([...employments, selected]);
      return;
    }

    const clonedEmployments = [...employments];
    clonedEmployments[employmentIdx] = selected;

    setEmployments(clonedEmployments);
    setSelected({ ...initialState, id: uuid() })
  };

  const handleSelect = (employment) => {
    setSelected(employment);
  };

  const handleDelete = (id) => {
    setEmployments((state) => state.filter((el) => el.id !== id));
  };

  const handleInput = (name) => {
    return (event) => {
      setSelected((state) => ({ ...state, [name]: event.target.value }));
    };
  };

  return (
    <>
      <CRow>
        <CCol>
          <div className="gragged">
            {employments.map((employment) => (
              <DraggedItem
                key={employment.id}
                title={employment.title}
                onClick={handleSelect.bind(null, employment)}
                onDelete={handleDelete.bind(null, employment.id)}
                skillsList={[
                  `${formatDate(employment.period_from)} - ${formatDate(
                    employment.period_to
                  )}`,
                  employment.company,
                  employment.city,
                ]}
              />
            ))}
          </div>
        </CCol>
      </CRow>
      <div className="row r-gap-30 mt-4">
        <CRow className="g-30 r-gap-30">
          <CCol xs={6}>
            <CFormInput
              value={selected.title}
              onChange={handleInput('title')}
              type="text"
              floatingLabel="Job Title"
              placeholder="Job Title"
            />
          </CCol>
          <CCol xs={6}>
            <CFormInput
              value={selected.company}
              onChange={handleInput('company')}
              type="text"
              floatingLabel="Company / Organization Name"
              placeholder="Company / Organization Name"
            />
          </CCol>
          <CCol xs={6}>
            <CRow>
              <CCol xs={6}>
                <CFormInput
                  value={selected.period_from}
                  onChange={handleInput('period_from')}
                  type="date"
                  floatingLabel="From"
                  placeholder="From"
                />
              </CCol>
              <CCol xs={6}>
                <CFormInput
                  value={selected.period_to}
                  onChange={handleInput('period_to')}
                  type="date"
                  floatingLabel="To"
                  placeholder="To"
                />
              </CCol>
            </CRow>
          </CCol>
          <CCol xs={6}>
            <CFormInput
              value={selected.city}
              onChange={handleInput('city')}
              type="text"
              floatingLabel="City"
              placeholder="City"
            />
          </CCol>
          <CCol xs={12}>
            <Textarea
              value={selected.description}
              onChange={handleInput('description')}
              name="description"
            />
          </CCol>
          <CCol xs={12}>
            <AddButton
              onClick={handleEmployment}
              text="Add one more employment"
            />
          </CCol>
        </CRow>
      </div>
    </>
  );
};

export default FormEmployment;
