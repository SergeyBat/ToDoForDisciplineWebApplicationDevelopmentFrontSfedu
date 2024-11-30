import styles from "./page.module.scss";
import type {Metadata} from "next";
import {TasksList} from "@/components/TasksList/TasksList";

export default function Home() {


  return (
    <div className={styles.root}>
      <TasksList />
    </div>
  );
}

export const metadata: Metadata = {
  title: "ToDo",
  description: "ToDo для лр",
};