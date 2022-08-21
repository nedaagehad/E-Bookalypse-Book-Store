import React, { lazy , Suspense } from 'react'
import Preloader from '../../../components/Preloader/Preloader';
import { useSelector } from 'react-redux';
const ViewUserProfile = lazy(() => import('../../../components/ViewUserProfile/ViewUserProfile') );
function UserProfile() {

  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={`container-fluid content ${theme === "night" ? "bg-dark" : "bg-white"}`}>
       <Suspense fallback={<Preloader />}>
             <ViewUserProfile />
        </Suspense>
    </div>
  )
}

export default UserProfile;