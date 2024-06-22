import "./App.css";
import { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userlist/UserList";
import NewUserFrom from "./components/newuser/NewUserFrom";

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setModal] = useState(false);

  // delete user
  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };

  //closemodal

  const closeModal = (e) => {
    if (e.target.className == "overlay") {
      setModal(false);
    }
    if (e.key == "Escape") {
      setModal(false);
    }
  };

  //add user

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setModal(false);
  };

  return (
    <div onKeyDown={closeModal} onClick={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h1>No Users</h1>}
        </div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      {showModal && <NewUserFrom addUser={addUser} />}
      <button
        onClick={() => {
          setModal(true);
        }}
        className="create-user"
      >
        Create User
      </button>
      <Footer />
    </div>
  );
}

export default App;
