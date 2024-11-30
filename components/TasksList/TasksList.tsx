'use client';

import {useLocalStorage} from "@/hooks/useLocalStorage";
import {TaskType, TasksListType} from "@/types/tasks";
import {TaskInput} from "@/components/TaskInput";
import {TaskItem} from "@/components/TaskItem";
import styles from "./TasksList.module.scss";
import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import clsx from "clsx";
import {tasksForLocalStorage} from "@/app/InitialDataBase";

export const TasksList = () => {
  const [tasks, setTasks] = useLocalStorage<TasksListType>("tasks", []);
  const [viewMode, setViewMode] = useLocalStorage<'tile' | 'list' | null>("viewMode", null);
  const [editingTask, setEditingTask] = useState<TaskType | null>(null);

  useEffect(() => {
    if (!tasks.length) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTasks(tasksForLocalStorage)
    }

    if (!viewMode) {
      setViewMode('tile')
    }
  }, []);

  const addTask = (newTask: Omit<TaskType, 'id'>) => {
    setTasks([...tasks, {id: uuidv4(), ...newTask}]);
  };

  const deleteTask = (id: TaskType["id"]) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const updateTask = (updatedTask: TaskType) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const onCreateCloneTask = (task: TaskType) => {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      id,
      ...copyTask
    } = task;
    addTask(copyTask)
  }

  return (
    <div className={styles.root}>
      <TaskInput
        onAddTask={addTask}
        task={editingTask}
        onUpdateTask={updateTask}
        resetEditingTask={() => setEditingTask(null)}
      />
      <div className={styles.view}>
        <button
          className={clsx(
            styles.viewButton,
            {[styles.active]: viewMode === 'list'}
          )}
          onClick={() => setViewMode('list')}
        >
          Список
        </button>
        <div className={styles.divider}/>
        <button
          className={clsx(
            styles.viewButton,
            {[styles.active]: viewMode === 'tile'}
          )}
          onClick={() => setViewMode('tile')}
        >
          Плитка
        </button>
      </div>
      <ul className={clsx({
        [styles.list]: viewMode === 'list',
        [styles.tile]: viewMode === 'tile',
      })}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={deleteTask}
            onEditTask={setEditingTask}
            onCreateCloneTask={onCreateCloneTask}
          />
        ))}
      </ul>
    </div>
  );
};
