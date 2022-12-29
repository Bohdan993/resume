import {
   CCol,
   CRow,
} from "@coreui/react";
import Textarea from "../../forms/textarea/TextArea";
import { withFormik, useFormikContext } from "formik";
import { withForm} from "../../../HOC/withForm";
import { useState, useEffect } from "react";
import { prewriteList as list } from "../../../utils";

const hobieArr = [{id: 1}];

const FormHobies = (props) => {

   const {
      handleBlur
    } = props;

    const { setValues: setFormikValues } = useFormikContext();
    const [show, setShow] = useState(false);
    const [localHobies, setLocalHobies] = useState([]);

    useEffect(() => {
      setFormikValues(localHobies);
  }, [localHobies, setFormikValues]);


    const handleFocus = (e) => {
      setShow(false);
    }

    const handleInput = (event, name, id, text) => {
      let found = localHobies.find(el => el.id === id);
   
      if(found) {
         setLocalHobies((state) => {
            const index = state.findIndex(el => el.id === id);
            const before = state.slice(0, index);
            const after = state.slice(index + 1);
            return [...before, {...found, [name]: text}, ...after];
         });
      } else {
         setLocalHobies((state) => {
            return [...state, {id, [name]: text}];
         });
      }
   
   };

   return (
      <>
         <CRow className="g-30 r-gap-30">
            {hobieArr.map(hobie => (
               <CCol xs={12} key={hobie?.id}>
                  <Textarea
                  value={localHobies.find(el => el.id === hobie?.id)?.text || ''}
                  onChange={(_, text) => handleInput(null, 'text', hobie?.id, text)} 
                  onFocus={handleFocus}
                  onBlur={handleBlur} 
                  hideButton={false} 
                  name="text"
                  prewrite={true}
                  prewritePopupShow={show}
                  prewriteButtonHandler={()=>setShow(prev => !prev)}
                  prewriteItems={list}
                  placeholder={'Description of hobbie'}
                  id={"hobiesTextarea" + hobie?.id}
                  currentValueId={'1'}
                  />
            </CCol>
            ))}

         </CRow>
      </>
   )
}


export default withFormik({ 
   mapPropsToValues: (props) => {
         const keys = { 
            "text": ''
         }

         const initialValues = {};

         for (const [name, _] of Object.entries(keys)) {
            initialValues[name] = props.valuesFromStore[name] || '';
          }

         return initialValues;
   }
})(withForm(FormHobies));