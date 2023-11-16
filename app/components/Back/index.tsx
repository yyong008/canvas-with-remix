import { useNavigate } from "@remix-run/react";
import styles from "./index.module.css";

export default function Back() {
  const navigate = useNavigate();
  return (
    <div
      className={styles.back}
      onClick={() => {
        navigate(-1);
      }}
    >
      返回
    </div>
  );
}
