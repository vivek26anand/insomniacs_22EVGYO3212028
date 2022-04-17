import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import Places from './Places';
import Students from './Students';
import Reports from './Reports';
import Signin from './Signin';
import Signup from './Signup';
import AddPlaces from './AddPlaces';
import AddStudents from './AddStudent';
function DemoVideo() {
  window.location.href = "https://www.youtube.com/channel/UCB64f614ehCdY_5xZvMlCaQ"
  return(<>
  </>)
}
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/places" element={<Places />} />
        <Route path="/places/add-new" element={<AddPlaces />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/add-new" element={<AddStudents />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/demo-video" element={<DemoVideo />} />
      </Routes>
    </Router>
  );
}

export default App;
