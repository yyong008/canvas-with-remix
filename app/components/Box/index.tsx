import styles from './index.module.css';

type IBoxProps = {
  title: string;
  children: React.ReactNode
}

export default function Box(props: IBoxProps) {
  return <div className={styles.box}>
    <div>{props.title}</div>
    <div className={styles.draw}>
      {props.children}
    </div>
  </div>
}
