import './App.css';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from './Components/Loader/LoaderContent';
import { ToastContainer} from 'react-toastify';



const Layout = lazy(() => import('./Components/Layouts/layout'));
const HomePage = lazy(() => import('./Pages/Home/HomePage'));
const TeachersPage = lazy(() => import('./Pages/Teachers/TeachersPage'));
const FavoritePage = lazy(() => import('./Pages/Favorite/FavoritePage'));





function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/favorites" element={<FavoritePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
       <ToastContainer
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"/>
      </>
  );
}

export default App;