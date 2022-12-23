import { CCol, CRow } from "@coreui/react";
import uuid from "react-uuid";

import { ReactComponent as DeleteIcon } from "../../../images/icons/delete.svg";
import { ReactComponent as DragIcon } from "../../../images/icons/many-dots.svg";

import "./DraggedItem.scss";

const DraggedItem = ({ title, skillsList, onDelete, onClick }) => {
  return (
    <div onClick={onClick} className="dragged__item p-3 d-flex justify-content-between align-items-center gap-2">
      <span className="dragged__drag w-20">
        <DragIcon />
      </span>
      <div className="dragged__content w-100">
        <div className="dragged__title mb-2">{title}</div>
        <CRow>
          {skillsList.map((skill) => (
            <CCol xs="auto" key={`${skill}_${uuid()}`}>
              <span>{skill}</span>
            </CCol>
          ))}
        </CRow>
      </div>
      <span onClick={onDelete} className="dragged__delete">
        <DeleteIcon />
      </span>
    </div>
  );
};

export default DraggedItem;
