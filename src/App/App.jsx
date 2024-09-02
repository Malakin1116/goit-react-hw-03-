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

export default function App() {
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
        search: "",
      }}
      onSubmit={(values, actions) =>{
        console.log(values);
        actions.resetForm();
      }}
    >
        <Form>
          <div>
            <label>Name:</label>
            <Field name="name" type="text" />
          </div>
          <div>
            <label>Number:</label>
            <Field name="number" type="text" />
          </div>
          <button type="submit">Add Contact</button>
        </Form>
      
        <Form>
        <div>
            <label>search:</label>
            <Field name="search"  type="text" />
          </div>
       </Form>
      
        {/* <ul>
          {contactJSON.map(contact => (
            <li key={contact.id}>
              <Contact data={contact} />
            </li>
          ))}
        </ul> */}
    </Formik>
  );
}
