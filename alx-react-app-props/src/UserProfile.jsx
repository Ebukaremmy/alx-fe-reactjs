import { useContext } from 'react';
import UserContext from './UserContext'; // Adjust path to '../UserContext' if in components folder

function UserDetails() { // Change to UserProfile for the other file
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails; // Change to UserProfile for the other file