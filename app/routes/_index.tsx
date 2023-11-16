import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import styles from '~/styles/modules/index.module.css'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  const data = [
    {id: 0, name: 'line' },
    {id: 1, name: 'arrow' },
    {id: 2, name: 'circle' },
    {id: 3, name: 'diamond' },
    {id: 4, name: 'image' },
    {id: 6, name: 'rectangle' },
    {id: 7, name: 'square' },
    {id: 8, name: 'star' },
    {id: 9, name: 'triangle' },
    {id: 10, name: 'video' },
  ]
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 style={{ textAlign: 'center' }}>Canvas With Remix and RxJS</h1>
      <div className={styles.listWrap}>
        {data.map((item) => {
          return <div key={item.id} className={styles.item}>
            <Link to={`/shape/${item.name}`}>{item.name}</Link>
          </div>
        })}
      </div>
    </div>
  );
}
