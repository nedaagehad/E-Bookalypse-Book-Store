import React from 'react';
import ViewUserProfile from '../../../components/ViewUserProfile/ViewUserProfile';
import { useSelector } from 'react-redux';

function UserProfile() {

  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={theme === "night" ? "bg-dark" : ""}>
      <ViewUserProfile />
    </div>
  )
}

export default UserProfile;