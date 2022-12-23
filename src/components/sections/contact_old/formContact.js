
import { useState } from "react";
import {
   CForm,
   CFormInput,
   CCol,
   CRow,
   CButton
} from "@coreui/react";
import { useNavigate } from "react-router-dom"
import { ReactComponent as PlusIcon } from '../../../images/icons/plus.svg'
import { ReactComponent as DownIcon } from '../../../images/icons/down.svg'
import axios from 'axios';
import FormData from "form-data";

const FormContact = () => {
   const [visibleAllInputs, setVisibleAllInputs] = useState(false);
   let navigate = useNavigate();
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [country, setCountry] = useState('');
   const [nationality, setNationality] = useState('');
   const [city, setCity] = useState('');
   const [adress, setAdress] = useState('');
   const [zioCode, setZioCode] = useState('');
   const [driverLicense, setDriverLicense] = useState('');
   const [place, setPlace] = useState('');
   const [date, setDate] = useState('');
   const [selectedFile, setSelectedFile] = useState(null);

   const handleChangeVisibility = (e) => {
      e.preventDefault();
      setVisibleAllInputs(prev => !prev);
   }
   const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0])
   }
   const formSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();

      formData.append('date_of_birth', date);
      formData.append('driver_license', driverLicense);
      formData.append('zip_code', city);
      formData.append('city', date);
      formData.append('phone', phone);
      formData.append('place_of_birth', place);
      formData.append('last_name', lastName);
      formData.append('address', adress);
      formData.append('country', country);
      formData.append('first_name', firstName);
      formData.append('nationality', nationality);
      formData.append('email', email);
      formData.append('picture', selectedFile);

      axios.post('http://resume.waytrel.pro/profile/basic/',
         formData,
         { headers: { 'Content-Type': 'multipart/form-data' }, })
         .then(res => {
            if (res.data.status === 'session_data_saved') {
               console.log(res.data.session_id);
               navigate('/login', {
                  state: {
                     sessionId: res.data.session_id
                  }
               });
            }
         }
         )
         .catch((error) => console.log(error))
   }
   const handleClick = () => {
      navigate('/login');
   }
   const classButton = visibleAllInputs ? 'active show-hidden' : 'show-hidden';
   const textInButton = visibleAllInputs ? 'Hide additional details' : 'Edit additional details';

   return (
      <CForm onSubmit={formSubmit} className="row r-gap-30">
         <CRow>
            <CCol xs={6} className="gap-3">
               <CFormInput onChange={(e) => setFirstName(e.target.value)} value={firstName} className="mb-3" type="text" floatingLabel="First Name" placeholder="First Name" />
               <CFormInput onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" floatingLabel="Last Name" placeholder="Last Name" />
            </CCol>
            <CCol xs={6}>
               <div className="add-photo">
                  <img alt="" className="add-photo__image" />
                  <input onChange={handleFileSelect} hidden type="file" id='upload' className="add-photo__input" />
                  <label className="add-photo__label" htmlFor="upload">
                     <PlusIcon />
                     Add Photo
                  </label>
               </div>
            </CCol>
         </CRow>
         <CRow className="g-30 r-gap-30">
            <CCol xs={6}>
               <CFormInput onChange={(e) => setEmail(e.target.value)} value={email} type="email" floatingLabel="E-mail*" placeholder="E-mail*" />
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={(e) => setPhone(e.target.value)} value={phone} type="phone" floatingLabel="Phone" placeholder="Phone" />
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={(e) => setCountry(e.target.value)} value={country} type="text" floatingLabel="Country" placeholder="Country" />
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={(e) => setCity(e.target.value)} value={city} type="text" floatingLabel="City" placeholder="City" />
            </CCol>
         </CRow>
         {visibleAllInputs && <CRow className="g-30 r-gap-30">
            <CCol xs={6}>
               <CFormInput onChange={(e) => setAdress(e.target.value)} value={adress} type="text" floatingLabel="Adress" placeholder="Adress" />
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={(e) => setZioCode(e.target.value)} value={zioCode} type="text" floatingLabel="Zio Code" placeholder="Zio Code" />
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={(e) => setDriverLicense(e.target.value)} value={driverLicense} type="text" floatingLabel="Driver license" placeholder="Driver license" />
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={(e) => setNationality(e.target.value)} value={nationality} type="text" floatingLabel="Nationality" placeholder="Nationality" />
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={(e) => setPlace(e.target.value)} value={place} type="text" floatingLabel="Place of birth" placeholder="Place of birth" />
            </CCol>
            <CCol xs={6}>
               <CFormInput onChange={(e) => setDate(e.target.value)} value={date} type="date" floatingLabel="Date of birth" placeholder="Date of birth" />
            </CCol>
         </CRow>}

         <CCol xs={12}>
            <button onClick={(e) => handleChangeVisibility(e)} className={classButton}>
               {textInButton}
               <DownIcon />
            </button>
         </CCol>
         <CCol>
            <CButton type="submit" color="blue">Continue</CButton>
         </CCol>
      </CForm>
   )
}

export default FormContact;