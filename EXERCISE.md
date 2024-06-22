// import { useState } from "react";
// import Title from "./components/Title";
// import Modal from "./components/Modal/Modal";
// import { Fragment } from "react";

// function App() {
// const [showModal, setShowModal] = useState(false);
// const [showConent, setShowContent] = useState(true);
// const [events, setEvents] = useState([
// { title: "akhror's birthday party", id: 1 },
// { title: "doniyor's live stream", id: 2 },
// { title: "match: manchester united vs barcelona", id: 3 },
// ]);

// // delete items
// const handleDelete = (id) => {
// setEvents((prev) => {
// return prev.filter((event) => {
// return event.id !== id;
// });
// });
// };

// const activeBtn = () => {
// setShowModal(true);
// };

// //toggle

// const closeBtn = () => {
// setShowModal(false);
// };

// let subtitle = "All events well be here :)";

// return (
// <div className="App">
// <Title title="Abdulloh's Kingdom👑 Events" subtitle={subtitle} />
// <br />
// {showConent && (
// <button onClick={() => setShowContent(false)}>Hide Conent</button>
// )}
// {!showConent && (
// <button onClick={() => setShowContent(true)}>Show Conent</button>
// )}
// {showConent && (
// <div>
// {events.length === 0 && <h3>Not Conent Yet :(</h3>}
// {events.map((event) => {
// return (
// <Fragment key={event.id}>
// <h2>{event.title}</h2>
// <button onClick={() => handleDelete(event.id)}>Delete</button>
// </Fragment>
// );
// })}{" "}
// </div>
// )}

// {showModal && (
// <Modal closeBtn={closeBtn}>
// <h2>Akhror Web Youtube Channel❤️</h2>
// <p>
// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
// porro amet iure ex ullam nemo sint nobis facere fugit. Quam nobis
// blanditiis non ipsum, numquam, sunt eveniet tempora culpa velit
// libero dolore eos rerum debitis similique esse tenetur maxime eaque
// laborum ad doloremque, alias vel. Dicta temporibus at architecto
// quis?
// </p>
// <a href="">Subscribe</a>
// </Modal>
// )}
// <br />
// <br />
// <button onClick={activeBtn}>Show Modal</button>
// </div>
// );
// }

export default App;

<!-- MODAL JSX -->

// style
import "./Modal.css";

export default function Modal({ children, closeBtn }) {
return (

<div className="modal-backdrop" onClick={closeBtn}>
<div className="modal">
{children}
<br />
<br />
<button onClick={closeBtn}>Close Modal</button>
</div>
</div>
);
}

<!-- MODAL CSS -->

.modal-backdrop {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.5);
}
.modal {
padding: 30px;
max-width: 480px;
margin: 200px auto;
background: #fff;
border-radius: 10px;
}
