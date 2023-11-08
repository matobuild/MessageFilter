import "./App.css";
import React, { useState } from "react";
import userData from "./userData";
import icon from "./assets/icon.png";

function App() {
  const [showData, setShowData] = useState(userData);
  const [value, setValue] = useState("");
  let [personFind, setPersonFind] = useState(userData);

  const findData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    const textFind = event.target.value.toLowerCase();
    console.log(textFind);
    setShowData([...personFind]);

    if (textFind.length > 2) {
      console.log(personFind);

      const array = showData.filter(
        (showData) =>
          showData.first_name.toLowerCase().includes(textFind) ||
          showData.last_name.toLowerCase().includes(textFind)
      );

      console.log(personFind);
      setShowData([...array]);
    }
  };

  return (
    <div className="grid justify-center">
      <div className="max-w-xl h-2/4  bg-slate-700 p-10">
        <div className="h-full">
          <div className="h-1/6">
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
          </div>
          <div className="h-5/6 bg-orange-300 rounded-lg overflow-auto">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
