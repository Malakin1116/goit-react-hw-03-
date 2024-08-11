
import css from './Form.module.css';

export default function Form({onAdd}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({
            id: Date.now(),
            text: e.target.elements.task.value,
        });
        e.target.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input className={css.input} type="text" name="task" placeholder="Add a new task" />
            <button className={css.button} type="submit">Add task</button>
        </form>
    );
}
