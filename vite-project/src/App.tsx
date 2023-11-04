import "./App.css";
import { useState } from "react";

//mock data
import userData from "./userData";
// import icon
import icon from "./assets/icon.png";

function App() {
  const [showData, setShowData] = useState(userData);

  return (
    <div className="container p-5">
      {showData.map((user) => {
        return (
          <div className="mx-3 mt-3">
            <div className="flex" key={user.id}>
              <div className="basis-1/4">
                <img
                  className="rounded-full "
                  src={user.avatar}
                  alt="no-img-found"
                />
              </div>
              <div className="basis-2/4">
                <ul>
                  <li>{`${user.first_name} ${user.last_name}`}</li>
                  <li className="text-gray-400">{user.email}</li>
                </ul>
              </div>
              <div className="basis-1/4">
                <img className="w-1/12" src={icon} alt="no-icon-found" />
              </div>
            </div>
            <hr className="mt-3" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
