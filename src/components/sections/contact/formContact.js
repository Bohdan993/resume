
import { useState } from "react";
import {
   CFormInput,
   CCol,
   CRow,
   CButton
} from "@coreui/react";
import { ReactComponent as PlusIcon } from '../../../images/icons/plus.svg';
import { ReactComponent as DownIcon } from '../../../images/icons/down.svg';
import { withFormik } from 'formik';
import { withForm } from "../../../HOC/withForm";

const noop = () => {}

const FormContact = (props) => {
   const {
      values,
      // touched,
      // errors,
      handleChange,
      handleBlur,
    } = props;

   const [visibleAllInputs, setVisibleAllInputs] = useState(false);


   const handleChangeVisibility = (e) => {
      e.preventDefault();
      setVisibleAllInputs(prev => !prev);
   }


   const classButton = visibleAllInputs ? 'active show-hidden' : 'show-hidden';
   const textInButton = visibleAllInputs ? 'Hide additional details' : 'Edit additional details';

   return (
      <>
         <CRow>
            <CCol xs={6} className="gap-3">
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['first-name']} className="mb-3" type="text" floatingLabel="First Name" placeholder="First Name" name="first-name"/>
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['last-name']} type="text" floatingLabel="Last Name" placeholder="Last Name" name="last-name"/>
            </CCol>
            <CCol xs={6}>
               <div className="add-photo">
                  <img alt="" className="add-photo__image" />
                  <input onChange={noop} hidden type="file" id='upload' className="add-photo__input" name="image"/>
                  <label className="add-photo__label" htmlFor="upload">
                     <PlusIcon />
                     Add Photo
                  </label>
               </div>
            </CCol>
         </CRow>
         <CRow className="g-30 r-gap-30">
            <CCol xs={6}>
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['email']} type="email" floatingLabel="E-mail*" placeholder="E-mail*" name="email"/>
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['phone']} type="phone" floatingLabel="Phone" placeholder="Phone" name="phone" />
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['country']} type="text" floatingLabel="Country" placeholder="Country" name="country"/>
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['city']} type="text" floatingLabel="City" placeholder="City" name="city"/>
            </CCol>
         </CRow>
         {visibleAllInputs && <CRow className="g-30 r-gap-30">
            <CCol xs={6}>
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['address']} type="text" floatingLabel="Adress" placeholder="Adress" name="address"/>
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['zio-code']} type="text" floatingLabel="Zio Code" placeholder="Zio Code" name="zio-code"/>
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['driver-license']} type="text" floatingLabel="Driver license" placeholder="Driver license" name="driver-license"/>
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['nationality']} type="text" floatingLabel="Nationality" placeholder="Nationality" name="nationality"/>
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['place-of-birth']} type="text" floatingLabel="Place of birth" placeholder="Place of birth" name="place-of-birth"/>
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['date-of-birth']} type="date" floatingLabel="Date of birth" placeholder="Date of birth" name="date-of-birth"/>
            </CCol>
         </CRow>}

         <CCol xs={12}>
            <button onClick={(e) => handleChangeVisibility(e)} className={classButton}>
               {textInButton}
               <DownIcon />
            </button>
         </CCol>
         </>

   )
}

export default withFormik({ 
   mapPropsToValues: () => (
      { 
         "first-name": '',
         "last-name": '',
         email: '',
         phone: '',
         country: '',
         city: '',
         address: '',
         "zio-code": '',
         "driver-license": '',
         "nationality": '',
         "place-of-birth": '',
         "date-of-birth": ''
      }
      ),
   handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
})(withForm(FormContact));
