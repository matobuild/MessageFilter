import "./App.css";
import { useState } from "react";

//mock data
import userData from "./userData";

function App() {
  const [showData, setShowData] = useState(userData);

  return (
    <div className="container">
      <ul>
        {showData.map((user) => {
          return (
            <>
              <li key={user.id}>{`${user.first_name} ${user.last_name}`}</li>
              <li key={user.email}>{user.email}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
