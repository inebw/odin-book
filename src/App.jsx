import { Outlet, useNavigate } from "react-router";
const url = "http://localhost:3000";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Odin Book</h1>
      <div>
        <button onClick={() => navigate("login")}>Login</button>
        <button onClick={() => navigate("register")}>Register</button>
      </div>
      <Outlet context={{ url }} />
    </div>
  );
}

export default App;
