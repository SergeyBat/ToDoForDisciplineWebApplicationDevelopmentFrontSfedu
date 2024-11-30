import styles from './Tile.module.scss';
import {TaskType} from "@/types/tasks";
import clsx from "clsx";



interface TileProps {
  tile: TaskType
}


export const Tile = ({
  tile
}: TileProps) => {

  const {
    title,
    description,
    date,
    status
  } = tile;

  const getStatus = (() => {
    switch (status) {
      case 'ongoing':
        return 'В процессе';
      case 'completed':
        return 'Выполнена';
      case 'cancelled':
        return 'Отменена';
      default:
        return "не начата";
    }
  })()


  return (
    <article className={styles.tile}>
      <h3 className={styles.tileTitle}>{title}</h3>
      <p className={styles.tileDescription}>{description}</p>
      <span className={styles.tileDate}>{date}</span>
      <span className={
        clsx(
        styles.tileStatus, {
            [styles.tileStatus_completed]: status === 'completed',
            [styles.tileStatus_ongoing]: status === 'ongoing',
            [styles.tileStatus_cancelled]: status === 'cancelled',
      })
      }>{getStatus}</span>
    </article>
  )
}