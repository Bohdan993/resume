import {
   CContainer,
   CRow,
   CCol
} from "@coreui/react";
import SideBar from "../sideBar/SideBar";
import Resume from "../resume/Resume";
import {
   Outlet
} from "react-router-dom";
import './adminPage.scss';

const AdminPage = () => {

   return (
      <CContainer fluid className="container-admin">
         <CRow className="row-main">
            <SideBar></SideBar>
            <CCol className='main-content'>
               <Outlet />
            </CCol>
            <Resume></Resume>
         </CRow>

      </CContainer>
   )
}
export default AdminPage;