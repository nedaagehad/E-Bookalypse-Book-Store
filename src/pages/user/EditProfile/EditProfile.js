import React, { lazy , Suspense } from 'react';
import { useSelector } from 'react-redux';
import Preloader from '../../../components/Preloader/Preloader';
const EditUserProfile = lazy(() => import('../../../components/EditUserProfile/EditUserProfile'));

function EditProfile() {

  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={`container-fluid content py-5 ${theme === "night" ? "bg-dark" : "bg-white"}`}>
       <Suspense fallback={<Preloader />}>
           <EditUserProfile />
      </Suspense>
    </div>
  )
}

export default EditProfile