import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  redirect,
  Navigate,
} from "react-router-dom";
import Userfront from "@userfront/react";

Userfront.init("vnd7wq9b");

const SignupForm = Userfront.build({
  toolId: "kdddnml",
});

const LoginForm = Userfront.build({
  toolId: "baaarol",
});

const PasswordResetForm = Userfront.build({
  toolId: "mllladb",
});

const LogoutButton = Userfront.build({
  toolId: "nkkkolk",
});

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/reset">Reset</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/reset" element={<PasswordReset />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

function Home() {
  return (
    <>
      <div>
        <SignupForm />
      </div>
      <h2>Home</h2>;
    </>
  );
}

function Login() {
  return (
    <>
      <LoginForm />
    </>
  );
}

function PasswordReset() {
  return (
    <>
      <div>
        <PasswordResetForm />-
      </div>
    </>
  );
}

function Dashboard() {
  if (!Userfront.accessToken()) {
    return <Navigate to="/login" replace />;
  }

  // If the user is logged in, show the dashboard
  const userData = JSON.stringify(Userfront.user, null, 2);
  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{userData}</pre>
      <button onClick={Userfront.logout}>Logout</button>
    </div>
  );
}

async function getInfo() {
  const res = await fetch("http://localhost:4002/content", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Userfront.accessToken()}`,
    },
  });

  // const data = await res.json();
  const data = await res.json();
  console.log(data);
}

getInfo();

export default App;
