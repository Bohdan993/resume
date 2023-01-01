
import { useState, useEffect } from "react";
import {
   CFormInput,
   CCol,
   CRow,
   CFormSelect
} from "@coreui/react";
import { ReactComponent as PlusIcon } from '../../../images/icons/plus.svg';
import { ReactComponent as DownIcon } from '../../../images/icons/down.svg';
import { withFormik } from "formik";
import { withForm } from "../../../HOC/withForm";
import { DatePicker } from "../../forms/datePicker/DatePicker";




const FormContact = (props) => {
   const {
      values,
      handleChange,
      handleBlur,
      setFieldValue,
      countries
    } = props;

   const [visibleAllInputs, setVisibleAllInputs] = useState(false);
   const [picture, setPicture] = useState(null);
   const [date, setDate] = useState(values['date_of_birth'] || null);


   const handleSelectImage = (event) => {
      setPicture(event.target.files?.[0]);
      setFieldValue('picture', event.target.files?.[0]);
   };


   const handleChangeVisibility = (e) => {
      e.preventDefault();
      setVisibleAllInputs(prev => !prev);
   }

   useEffect(() => {
      setFieldValue('date_of_birth', date);
  }, [date, setFieldValue]);


   const classButton = visibleAllInputs ? 'active show-hidden' : 'show-hidden';
   const textInButton = visibleAllInputs ? 'Hide additional details' : 'Edit additional details';

   return (
      <>
         <CRow>
            <CCol xs={6} className="gap-3">
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['first_name']} className="mb-3" type="text" floatingLabel="First Name" placeholder="First Name" name="first_name" valid={true}/>
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['last_name']} type="text" floatingLabel="Last Name" placeholder="Last Name" name="last_name"/>
            </CCol>
            <CCol xs={6}>
               <div className="add-photo">
                  <img alt="" className="add-photo__image" src={picture ? URL.createObjectURL(picture) : values.picture} style={{display: picture || values.picture ? 'block' : 'none'}}/>
                  <input onChange={handleSelectImage} hidden type="file" id='upload' className="add-photo__input" name="image"/>
                  <label className="add-photo__label" htmlFor="upload">
                     <PlusIcon />
                     Add Photo
                  </label>
               </div>
            </CCol>
         </CRow>
         <CRow className="g-30 r-gap-30">
            <CCol xs={6}>
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['email']} type="email" floatingLabel="E-mail*" placeholder="E-mail*" name="email" invalid={true} />
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['phone']} type="phone" floatingLabel="Phone" placeholder="Phone" name="phone" invalid={true} />
            </CCol>
            <CCol xs={6}>
               <CFormSelect 
                  className="custom-select" 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                  value={values['country']} 
                  floatingLabel="Country" 
                  placeholder="Country" 
                  valid={true}
                  name="country"
               >
                  <option disabled>Country</option>
                  {countries && countries.map(el => {
                     return (
                        <option key={el?.id} value={el?.name}>{el?.name}</option>
                     );
                  })}
               </CFormSelect>
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
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['zip_code']} type="text" floatingLabel="Zip Code" placeholder="Zip Code" name="zip_code"/>
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['driver_license']} type="text" floatingLabel="Driver license" placeholder="Driver license" name="driver_license"/>
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['nationality']} type="text" floatingLabel="Nationality" placeholder="Nationality" name="nationality"/>
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={handleChange} onBlur={handleBlur} value={values['place_of_birth']} type="text" floatingLabel="Place of birth" placeholder="Place of birth" name="place_of_birth"/>
            </CCol>
            <CCol xs={6}>
               {/* <CFormInput 
               onChange={handleChange}
                onBlur={handleBlur} 
                value={values['date_of_birth']} 
                type="date" 
                floatingLabel="Date of birth" 
                placeholder="Date of birth" 
                name="date_of_birth"
                /> */}
               <DatePicker
                  selected={date ? new Date(date) : date}
                  onChange={(date) => setDate(date.toString())}
                  onBlur={handleBlur} 
                  placeholderText="Date of birth"
                  name="date_of_birth"
                  calendarClassName="custom-datepicker"
                  wrapperClassName="custom-datepicker-wrapper-2"
                  dateFormat="MMM, yyyy"
                  showMonthYearPicker
                  showPopperArrow={false}
                  useShortMonthInDropdown={true}
               />
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
   mapPropsToValues: (props) => {
         const keys = { 
            "first_name": '',
            "last_name": '',
            "email": '',
            "phone": '',
            "country": '',
            "city": '',
            "address": '',
            "zip_code": '',
            "driver_license": '',
            "nationality": '',
            "place_of_birth": '',
            "date_of_birth": '',
            "picture": ''
         }

         const initialValues = {};
         for (const [name, _] of Object.entries(keys)) {
            initialValues[name] = props.valuesFromStore[name] || '';
          }

         return initialValues;
   }
})(withForm(FormContact));
