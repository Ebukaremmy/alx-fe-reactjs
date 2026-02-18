import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div style={{ padding: '20px', border: '2px solid blue' }}>
      <h1>User Profile (Parent Layout)</h1>
      <nav>
        {/* These links navigate to the children */}
        <Link to="details">View Details</Link> | <Link to="settings">Go to Settings</Link>
      </nav>
      
      <div style={{ marginTop: '20px', background: '#f0f0f0' }}>
        {/* THIS IS THE MAGIC WINDOW WHERE CHILDREN APPEAR */}
        <Outlet /> 
      </div>
    </div>
  );
}

export default Profile;