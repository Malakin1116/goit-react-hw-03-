import { CiPhone } from "react-icons/ci";
import { GrAccessibility } from "react-icons/gr";

import css from "./Contact.module.css"

export default function Contact({ data: { id, name, number }, onDelete }) {
    
    return (
      <div className={css.container}>
        <div className={css.divLeft}>
          <p className={css.text}>
          <GrAccessibility className={css.icon} />
          {name}
          </p>
          <p className={css.text}>
            <CiPhone className={css.icon} />
            {number}
          </p>
        </div>
        <button className={css.button} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    );
  }