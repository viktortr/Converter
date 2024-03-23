import React, { useContext } from "react";
import ThemeContext from './ThemeContext';

const EditProfile = () => {
    const { theme } = useContext(ThemeContext); 

  return (
    <div>Edit Profile</div>
    );
}

export default EditProfile;