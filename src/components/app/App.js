
import AdminPage from '../adminPage/AdminPage';
import {
   BrowserRouter,
   Routes,
   Route,
   Link,
} from "react-router-dom";
import LoginPage from '../loginPage/LoginPage.js'
import Contact from '../sections/contact/Contact';
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

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<AdminPage />} >
               <Route index element={<Contact />} />
               <Route path='/employment' element={<Employment />} />
               <Route path='/education' element={<Education />} />
               <Route path='/skills' element={<Skills />} />
               <Route path='/activity' element={<Activity />} />
               <Route path='/hobies' element={<Hobies />} />
               <Route path='/course' element={<Course />} />
               <Route path='/intership' element={<InterShip />} />
               <Route path='/languages' element={<Languages />} />
               <Route path='/reference' element={<Reference />} />
               <Route path='/certificaties' element={<Certificaties />} />
               <Route path='/socials' element={<Socials />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
