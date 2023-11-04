import "./App.css";
import { useState } from "react";

//mock data
import userData from "./userData";
// import icon
import icon from "./assets/icon.png";

function App() {
  const [showData, setShowData] = useState(userData);

  return (
    <div className="container">
      {showData.map((user) => {
        return (
          <div className="flex" key={user.id}>
            <div>
              <img
                className="rounded-full"
                src={user.avatar}
                alt="no-img-found"
              />
            </div>
            <ul>
              <li>{`${user.first_name} ${user.last_name}`}</li>
              <li>{user.email}</li>
            </ul>
            <div>
              <img src={icon} alt="no-icon-found" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
