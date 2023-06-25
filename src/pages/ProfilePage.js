// // Profile.js

// import React, { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// const Profile = () => {
//   const { user } = useContext(AuthContext);

//   if (!user) {
//     return <div>Loading...</div>; // or handle the case when user is not logged in
//   }

//   const { first_name, last_name, identification_number, email } = user;

//   return (
//     <div>
//       <h1>Profile</h1>
//       <div>
//         <strong>First Name:</strong> {first_name}
//       </div>
//       <div>
//         <strong>Last Name:</strong> {last_name}
//       </div>
//       <div>
//         <strong>Identification Number:</strong> {identification_number}
//       </div>
//       <div>
//         <strong>Email:</strong> {email}
//       </div>
//     </div>
//   );
// };

// export default Profile;
