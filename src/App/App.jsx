// import { useState } from 'react'


// import css from "./App.module.css"
// import initialTasks from "../tasks.json"

// import Filter from '../Filter/Filter'
// import Form from "../ContactForm/ContactForm"
// import TaskList from "../TaskList/TaskList"



// export default function App() {
//     const [tasks, setTasks] = useState(initialTasks);
//     const [filter, setFilter] = useState(''); 
   

//     const addTask = (newTask) => {
//       setTasks((prevTasks)=>{
//         return[...prevTasks, newTask];
//       });
//     } ;

//       const deleteTask = (taskId) => {
//         console.log(taskId)
//         setTasks(prevTasks => {
//           return prevTasks.filter(task => task.id !== taskId);
//         })
//        }

//       const visibletasks = tasks.filter((e) => 
//         e.text.toLowerCase().includes(filter.toLowerCase())
//       );

//   return (
//     <div className={css.container}> 
//         <p>{filter}</p>
//         <Form onAdd={addTask}/>
//         <Filter value={filter} onFilter={setFilter}/>
//         <TaskList
//           tasks={visibletasks}  
//           onDelete={deleteTask}
//         />
//     </div>
//   );
// }


// import { useState } from 'react'
// import { Formik } from 'formik';

// import ContactForm from "./ContactForm/ContactForm"
// import ContactList from "../App/ContactList/ContactList"

// import contactJSON from "../contacts.json"
 
// export default function App () {

//   const [contact, setContact] = useState(contactJSON);
  

//   const handleSubmit = (e) => {
//     onAdd({
//         id: Date.now(),
//         text: e.target.elements.task.value,
//     });
//     e.target.reset();
// };

// const addContact = (newContact) => {
//   setContact((precContact)=>{
//     return[...precContact, newContact];
//   });
// } ;

// const visiblecontact = contact.filter((e) => 
//           e.text.toLowerCase().includes(e.filter.toLowerCase())
//         );

//   return (
//     <Formik initialValues={{
//       contact: "Add a new contact",
//     }}
//     onSubmit={
//       handleSubmit}
//     >
//       <ContactForm
//         onAdd={addContact}
//       />
//       {/* <SearchBox /> */}
//       <ContactList
//         contact={visiblecontact} 
//       />
//     </Formik>
//   )
// }


import { Formik, Form, Field } from 'formik';
// import contactJSON from "../contacts.json";

// function Contact({data: { name, number}}) {
//   return (
//     <div >
//       <p>{name}</p>
//       <p>{number}</p>
//       <button>Delete</button>
//     </div>
//   );
// }



import { useState} from "react";


export default function App() {
  const [contacts, setContacts] = useState([
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ]
  );


  const [filter, setFilter] = useState("");

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contactId !== contact.id);
    });
  };

  const visibleContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}