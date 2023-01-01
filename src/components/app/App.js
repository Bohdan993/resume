
import AdminPage from '../adminPage/AdminPage';
import {
   BrowserRouter,
   Routes,
   Route,
} from "react-router-dom";
import LoginPage from '../loginPage/LoginPage'

import Contact from '../sections/contact_old/Contact';
import Employment from '../sections/employment/Employment';
import Education from '../sections/education/Education';
import Skills from '../sections/skills/Skills';
import Activity from '../sections/activities/Activity';
import Hobies from '../sections/hobbies/Hobies';
import Course from '../sections/course/Course';
import InterShip from '../sections/intership/InterShip';
import Languages from '../sections/languages/Languages';
import Reference from '../sections/references/Reference';
import Certificaties from '../sections/certificaties/Certificaties';
import Socials from '../sections/socials/Socials';
import { ROUTES } from '../../constants/routes';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { setLoading } from '../../slices/app';
import { getAppData } from '../../thunks/app';







function App() {
   const dispatch = useDispatch();
   useEffect(()=>{
      async function fetchData(){
         try {
            await dispatch(getAppData());
         } catch(err) {
            console.error('Something went wrong', err);
            dispatch(setLoading(false));
         }
      }
      fetchData();
   }, [dispatch]);

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<AdminPage />} >
               <Route index element={<Contact />} />
               <Route path={`/${ROUTES['employment']}`} element={<Employment />} />
               <Route path={`/${ROUTES['education']}`} element={<Education />} />
               <Route path={`/${ROUTES['skills']}`} element={<Skills />} />
               <Route path={`/${ROUTES['activity']}`} element={<Activity />} />
               <Route path={`/${ROUTES['hobies']}`} element={<Hobies />} />
               <Route path={`/${ROUTES['course']}`} element={<Course />} />
               <Route path={`/${ROUTES['intership']}`} element={<InterShip />} />
               <Route path={`/${ROUTES['languages']}`} element={<Languages />} />
               <Route path={`/${ROUTES['reference']}`} element={<Reference />} />
               <Route path={`/${ROUTES['certificaties']}`} element={<Certificaties />} />
               <Route path={`/${ROUTES['socials']}`} element={<Socials />} />
            </Route>
            <Route path={`/login`} element={<LoginPage />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
