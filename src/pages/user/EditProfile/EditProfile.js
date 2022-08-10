import React from 'react';
import EditUserProfile from '../../../components/EditUserProfile/EditUserProfile';
import { useSelector } from 'react-redux';

function EditProfile() {

  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={`container-fluid py-5 ${theme === "night" ? "bg-dark" : ""}`}>
      <EditUserProfile />
    </div>
  )
}

export default EditProfile