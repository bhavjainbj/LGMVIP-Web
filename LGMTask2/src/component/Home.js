import React, { useEffect, useState } from "react";
import "../App.css";

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    setUsers(await response.json());
    // console.log(data);
  };

  //   useEffect(() => {
  //     getUsers();
  //   }, []);

  return (
    <div>
      <div className="text-center mt-5">
        <h2>Users</h2>
      </div>

      <button
        style={{
          border: "none",
          width: "150px",
          marginTop: '2rem',
          height: "40px",
          fontSize: "20px",
          borderRadius: "10px",
          fontWeight: "500",
          backgroundColor: '#f7eddc'
        }}
        onClick={getUsers}
      >
        Get Users
      </button>
      <div className="container">
        <div className="row">
          {users.map((curElem) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <img
                      className=""
                      style={{
                        width: "155px",
                        height: "155px",
                        borderRadius: "20px",
                      }}
                      src={curElem.avatar_url}
                      alt=""
                    />
                    <div className="ml-3 w-100">
                      <h4>{curElem.login}</h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
