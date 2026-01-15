import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // Ensure this path is correct

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    /* The value MUST be the userData object */
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;