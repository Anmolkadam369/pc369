
import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Jobs from './components/FindAJob/FindAJob';
import AdvertiseAJob from './components/AdvertiseAJob/AdvertiseAJob';
import EmployerRegistration from './components/LoginRegister/EmployerRegistration';
import EmployerLogin from './components/LoginRegister/EmployerLogin';
import ApplicantRegistration from './components/LoginRegister/ApplicantRegistration';
import ApplicantLogin from './components/LoginRegister/ApplicantLogin';
import PasswordReset from './components/LoginRegister/PasswordReset';
import JobFairs from './components/JobFairs/JobFairs';
import ContactUs from './components/ContactUs';
import VirtualCareerFair from './components/JobFairs/VirtualCareerFair';
import EmployerDashboard from './components/Dashboard/EmployerDashboard';
import ApplicantDashboard from './components/Dashboard/ApplicantDashboard';
import DisabledWorker from './components/DisabledWorker/DisabledWorker';
import DisabledPeople from './components/DisabledPeople/DisabledPeople';
import CoverLetter from './components/CoverLetter/CoverLetter';
import UpdatePassword from './components/LoginRegister/UpdatePassword';
import Thankyou from './components/Thankyou';
import { AuthProvider } from './components/AuthContext/AuthContext';


import JobDetails from './components/JobDetails/JobDetails';
import PaymentForm from './components/AdvertiseAJob/PaymentForm';
const App = () => {
  

  return (
    <Router>
      <div>
        <AuthProvider>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/employers" element={<AdvertiseAJob />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/job-fair" element={<JobFairs />} />
            <Route path='/thankyou' element={<Thankyou/>}/>
            <Route path="/job-details/:jobId" element={<JobDetails />} />
            <Route path="/virtualcareerfair" element={<VirtualCareerFair />} />
            <Route path="/employers/auth/registration" element={<EmployerRegistration />} />

            <Route path="/employers/auth/login" element={<EmployerLogin />} />
            <Route path="/employers/job/listing" element={<EmployerDashboard />} />
            <Route path="/auth/registration" element={<ApplicantRegistration />} />

            <Route path="/updatepassword" element={<UpdatePassword />} />

            <Route path="/applicant/job" element={<ApplicantDashboard />} />

            
    
            <Route path="/auth/login" element={<ApplicantLogin />} />

            <Route path="/forgot_password" element={<PasswordReset />} />
            <Route path="/business-benefits-of-hiring-disabled-people" element={<DisabledPeople />} />
            <Route path="/the-importance-of-a-great-cover-letter" element={<CoverLetter />} />
            <Route path="/disabled-workers-have-much-to-offer" element={<DisabledWorker />} />
          <Route path='/payment' element={<PaymentForm />}/>
          </Routes>
         
        </AuthProvider>
      </div>
      
    </Router>
  );
};

export default App;
