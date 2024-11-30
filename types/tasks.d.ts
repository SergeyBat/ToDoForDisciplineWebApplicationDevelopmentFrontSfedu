export type TaskType = {
  id: string | number,
  title: string;
  description: string;
  date: string; // формат: "DD.MM.YYYY"
  status: "ongoing" | "completed" | "not started" | "cancelled";
};

export type TasksListType = TaskType[];
