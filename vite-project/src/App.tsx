import "./App.css";
import React, { useState } from "react";
import userData from "./userData";
import icon from "./assets/icon.png";

function DataTable() {
  const [showData, setShowData] = useState(userData);
  return (
    <div className="container p-5">
      {showData.map((user) => {
        return (
          <div className="mx-3 mt-3" key={user.id}>
            <div className="flex" key={user.id}>
              <div className="basis-1/4">
                <img
                  className="rounded-full "
                  src={user.avatar}
                  alt="no-img-found"
                />
              </div>
              <div className="basis-2/4 flex place-items-center ml-3     ">
                <ul>
                  <li>{`${user.first_name} ${user.last_name}`}</li>
                  <li className="text-gray-400">{user.email}</li>
                </ul>
              </div>
              <div className="basis-1/4 grid place-content-center place-items-center  ">
                <img className="w-1/3" src={icon} alt="no-icon-found" />
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
    console.log(textFind);

    if (textFind.length > 2) {
      const array = showData;
      // need to pass value (showData) from DATATABLE TO SEARCH!!!!
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

// todo: search the input data
// todo: need to put the DATA so can use the value show DATA, how to pass data betwee function
