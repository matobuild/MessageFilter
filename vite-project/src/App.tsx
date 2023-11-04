import "./App.css";
import React, { useState } from "react";

//mock data
import userData from "./userData";
// import icon
import icon from "./assets/icon.png";

function DataTable() {
  const [showData, setShowData] = useState(userData);

  // todo: display the data`

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

function Search() {
  const [value, setValue] = useState("");

  const findData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    const textFind = event.target.value;
    if (textFind.length > 2) {
      // todo: search the input data
      // todo: need to input the DATA so can use the value show DATA, how to pass data betwee function
      // const person  = showData.filter(
      //             (showData) => {
      //               showData.first_name.include(textFind) ||
      //             }
      // )
    }
  };

  return (
    <div className="py-7 ">
      <div className="  rounded-lg bg-white px-5">
        <form>
          <input
            className="w-full h-12"
            type="text"
            placeholder="Search"
            value={value}
            onChange={findData}
          ></input>
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="grid justify-center">
      <div className="max-w-xl h-2/4  bg-slate-700 p-10">
        <div className="h-full">
          <div className="h-1/6">
            <Search />
          </div>
          <div className="h-5/6 bg-orange-300 rounded-lg overflow-auto">
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
