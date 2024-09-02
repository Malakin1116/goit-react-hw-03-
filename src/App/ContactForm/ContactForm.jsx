
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


import { Form, Formik, Field, ErrorMessage } from "formik";

import { nanoid } from "nanoid";
import * as Yup from "yup";

export default function ContactForm ({ onAdd }){

    const contactYup = Yup.object().shape({
        contactname: Yup.string()
          .min(3, "Minimum 3 symbols!")
          .max(50, "Maximum 50 symbols!")
          .required("Name is required"),
        contactnumber: Yup.string()
          .matches(/^\d{3}-\d{2}-\d{2}$/, "Number format should be 888-88-887")
          .required("Number is required"),
      });

    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.contactname,
            number: values.contactnumber,
        });
        actions.resetForm();
    };
    return (
        <Formik
      initialValues={{
        contactname: "",
        contactnumber: "",
      }}
      validationSchema={contactYup}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <div>
            <label  name="contactname">
              Name
            </label>
            <Field type="text" name="contactname" />
            <ErrorMessage
              name="contactname"
              component="span"
            />
          </div>
          <div>
            <label name="contactnumber">
              Number
            </label>
            <Field
              type="tel"
              name="contactnumber"
              placeholder="888-88-88"
            />
            <ErrorMessage
              name="contactnumber"
              component="span"
            />
          </div>
          <button type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
    );
}