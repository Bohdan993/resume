
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import FormData from "form-data";
import {
   CForm,
   CFormInput,
   CCol,
   CRow,
   CButton
} from "@coreui/react";
import { ReactComponent as ArrowBackIcon } from '../../images/icons/arrow-back.svg'
import './loginPage.scss'
import { useDispatch } from "react-redux";
import { setLoading } from "../../slices/app";
import { getAppData } from "../../thunks/app";

const LoginPage = () => {
   const dispatch = useDispatch();
   let navigate = useNavigate();
   const [password, setPassword] = useState('');
   const [repeatPassword, setRepeatPassword] = useState('');
   const [email, setEmail] = useState('');
   const [success, setSuccess] = useState(false);
   const location = useLocation();
   const sessionId = location.state.sessionId ? location.state.sessionId : '';
   const handleClick = () => {
      navigate('/');
   }

   const formSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('password', password);
      formData.append('email', email);
      formData.append('session_id', sessionId);
      axios.post('http://resume.waytrel.pro/api/register',
         formData,
         { headers: { 'Content-Type': 'application/json' }, })
         .then(res => {
            if (res.data.status === 200) {
               setSuccess(true);
            }
         }
         )
         .catch((error) => console.log(error))
   }
   if (success) {
      const dataForToken = JSON.stringify({
         password: password,
         username: email
      });

      axios.post('http://resume.waytrel.pro/api/login_check',
         dataForToken,
         { headers: { 'Content-Type': 'application/json' }, }
      )
      .then(res => {
         localStorage.setItem('token', res.data.token);
      })
      .then(res=> {
         alert('then');
         async function fetchData(){
            try {
               await dispatch(getAppData());
               navigate('/employment');
            } catch(err) {
               console.error('Something went wrong', err);
               dispatch(setLoading(false));
            }
         }
         fetchData();
      })
         .catch((error) => console.log(error))
   }
   return (
      <div className="login mx-auto">
         <div className="login__content">
            <div className="login__image-wrap">
            </div>
            <div className="login__wrap">
               <div className="login__title">
                https://meet.google.com/uie-htns-zbm  Register
               </div>
               <CForm onSubmit={formSubmit} className="row r-gap-30">
                  <CRow className="g-30 r-gap-30">
                     <CCol xs={12}>
                        <CFormInput
                           type="email"
                           value={email}
                           floatingLabel="E-mail*"
                           placeholder="E-mail*"
                           onChange={(e) => setEmail(e.target.value)}
                        />
                     </CCol>
                     <CCol xs={12}>
                        <CFormInput
                           type="password"
                           value={password}
                           floatingLabel="Password"
                           placeholder="Password"
                           onChange={(e) => setPassword(e.target.value)}
                        />
                     </CCol>
                     <CCol xs={12}>
                        <CFormInput
                           type="password"
                           value={repeatPassword}
                           floatingLabel="Repeat password"
                           placeholder="Repeat password"
                           onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                     </CCol>
                  </CRow>
                  <CCol className='d-flex gap-4'>
                     <CButton onClick={handleClick} className='login__back-button' color="secondary" variant="outline">
                        <ArrowBackIcon />
                        Back
                     </CButton>
                     <CButton type="submit" color="blue">Register</CButton>
                  </CCol>
               </CForm>
            </div>
         </div>
      </div>
   )
}
export default LoginPage;