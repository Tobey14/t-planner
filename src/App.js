import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import Login from './pages/home/Login';
import Home from './pages/home';
import SignUp from './pages/home/SignUp';
import Error from './pages/home/Error';
import Dashboard from './pages/Dashboard';
import Projects from './pages/projects';
import CreateProject from './pages/projects/createProject';
import SingleProject from './pages/projects/singleProject';
import SingleTask from './pages/tasks/singleTask';
import CreateTask from './pages/tasks/createTask';
import Notification from './pages/notifications';
import Tasks from './pages/tasks';
import SharedLayout from './pages/SharedLayout';
import Profile from './pages/profile';
import ChangePassword from './pages/profile/ChangePassword';
import HomeLayout from './pages/HomeLayout';
import ProtectedRoute from './pages/ProtectedRoute';
import AccessError from './pages/home/AccessError';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <HomeLayout />
        }>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='sign-up' element={<SignUp />} />

        </Route>

        <Route path='profile' element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Profile />} />
          <Route path='password-reset' element={<ChangePassword />} />
        </Route>



        <Route path='dashboard' element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path='projects' element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Projects />} />
          <Route path=':id' element={<SingleProject/>} />
          <Route path='create' element={<CreateProject />} />
        </Route>

        <Route path='tasks' element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Tasks />} />
          <Route path=':id' element={<SingleTask/>} />
          <Route path='create' element={<CreateTask/>} />
          
        </Route>

        <Route path='notifications' element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Notification />} />          
        </Route>

        <Route path='access-denied' element={
          <ProtectedRoute>
            <AccessError />
          </ProtectedRoute>
        } />
        <Route path='*' element={<Error />} />
      </Routes>

      <ToastContainer theme='colored' position='top-right' hideProgressBar
        autoClose={3000} pauseOnFocusLoss={false} pauseOnHover={false} className='toast' />
    </BrowserRouter>
  );
}

export default App;
