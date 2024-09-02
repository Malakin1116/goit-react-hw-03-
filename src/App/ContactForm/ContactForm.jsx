
// import css from './ContactForm.module.css';

// export default function Form({onAdd}) {
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onAdd({
//             id: Date.now(),
//             text: e.target.elements.task.value,
//         });
//         e.target.reset();
//     };

//     return (
//         <Form className={css.form} onSubmit={handleSubmit}>
//             <input className={css.input} type="text" name="task" placeholder="Add a new task" />
//             <button className={css.button} type="submit">Add task</button>
//         </Form>
//     );
// }

// import { Form, Field } from 'formik';
// import css from './ContactForm.module.css';

// export default function ContactForm() {
//   return (
//     <Form className={css.form}>
//       <Field className={css.input} type="text" name="contact" />
//       <button className={css.button} type="submit">Add Contact</button>
//     </Form>
//   );
// }
