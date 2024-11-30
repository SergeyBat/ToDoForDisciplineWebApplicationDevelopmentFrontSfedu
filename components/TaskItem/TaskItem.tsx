'use client';

import { TaskType } from "@/types/tasks";
import { Tile } from "@/components/Tile";
import styles from "./TaskItem.module.scss";

interface TaskItemProps {
  task: TaskType;
  onDeleteTask: (id: TaskType["id"]) => void
  onEditTask: (task: TaskType) => void
  onCreateCloneTask: (task: TaskType) => void
}

export const TaskItem = ({
  task,
  onDeleteTask,
  onEditTask,
  onCreateCloneTask,
}: TaskItemProps) => {
  return (
    <li className={styles.listItem}>
      <Tile tile={task}/>
      <div className={styles.actions}>
        <button onClick={() => onEditTask(task)} className={styles.editButton}>
          Редактировать
        </button>
        <button onClick={() => onCreateCloneTask(task)} className={styles.editButton}>
          Дублировать
        </button>
        <button onClick={() => onDeleteTask(task.id)} className={styles.deleteButton}>
          Удалить
        </button>
      </div>
    </li>
  );
};
