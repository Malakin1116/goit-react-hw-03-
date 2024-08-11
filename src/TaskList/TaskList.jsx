import Task from "../Task/Task"

import styles from "./TaskList.module.css"



export default function TaskList ({tasks, onDelete}){
    return (
        <ul className={styles.ul}>
        {tasks.map((task) => (
            <li className={styles.li} key={task.id}>
                <Task data={task} 
                      onDelete={onDelete} 
                />   
            </li>
        ))}
    </ul>
    );
}