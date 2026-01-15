import UserProfile from "./UserProfile";
import UserContext from "./UserContext";

function App() {
  return (
    <UserContext.Provider value={{ name: "John Doe", age: 25 }}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
