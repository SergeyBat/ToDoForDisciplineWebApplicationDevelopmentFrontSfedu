'use client';

import {FormEvent, useEffect, useState} from "react";
import { TaskType } from "@/types/tasks";
import styles from "./TaskInput.module.scss";

type NewTask = Omit<TaskType, 'id'>

interface TaskInputProps {
  onAddTask: (task: NewTask) => void
  task?: TaskType | null,
  onUpdateTask: (task: TaskType) => void
  resetEditingTask: () => void
}

export const TaskInput = ({
  onAddTask,
  task,
  onUpdateTask,
  resetEditingTask,
}: TaskInputProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState<TaskType["status"]>("not started");

  useEffect(() => {
    if (!task) return resetStates()
    setTitle(task.title);
    setDescription(task.description);
    setDate(task.date);
    setStatus(task.status);
  }, [task]);

  const resetStates = () => {
   setTitle("");
   setDescription("");
   setDate("");
   setStatus("not started");
   resetEditingTask()
  }


  const onSubmitForm = (event: FormEvent) => {
    event.preventDefault();

    const taskTitle = title.trim()
    const taskDescription = description.trim()
    const taskDate = date.trim()

    if (!(taskTitle && taskDescription && taskDate)) return
    const newTask: NewTask = {
      title: title.trim(),
      description: description.trim(),
      date: date.trim(),
      status,
    }

    if (task?.id) {
      onUpdateTask({
        ...task,
        ...newTask,
      });
    } else {
      onAddTask(newTask);
    }
    resetStates()
  }

  return (
    <form className={styles.form} onSubmit={onSubmitForm}>
      <div className={styles.column}>
        <label className={styles.label} htmlFor="title">Название задачи</label>
        <input
          id="title"
          type="text"
          placeholder="Введите название задачи"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
        />
      </div>

      <div className={styles.column}>
        <label className={styles.label} htmlFor="date">Дата</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={styles.input}
        />
      </div>

      <div className={styles.column}>
        <label className={styles.label} htmlFor="description">Описание задачи</label>
        <textarea
          id="description"
          placeholder="Введите описание задачи"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.textarea}
        />
      </div>

      <div className={styles.column}>
        <label className={styles.label} htmlFor="status">Статус</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as "not started" | "ongoing" | "completed")}
          className={styles.select}
        >
          <option value="not started">Не начата</option>
          <option value="ongoing">В процессе</option>
          <option value="completed">Завершена</option>
          <option value="cancelled">Отменена</option>
        </select>
      </div>

      <div className={styles.buttonWrapper}>
        <button type="submit" className={styles.addButton}>
          {task?.id ? 'Редактировать задачу' : 'Добавить задачу'}
        </button>
        <button type="button" onClick={resetStates} className={styles.resetButton}>
          {task?.id ? 'Отмена' : 'Сброс'}
        </button>
      </div>
    </form>
  );
};
