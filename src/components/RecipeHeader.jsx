import styles from "../styles/Recipe.module.css";
import dummyImg from "../assets/record-images/demo-pizza.jpeg";
export default function RecipeHeader({ image, name, count, description }) {
  const displayCount = count !== undefined && count > 0;
  return (
    <div className={styles.header}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={dummyImg} alt="" />
      </div>
      <div className={styles.summary}>
        <h1 className={styles.name}>{name}</h1>
      </div>
      <div className={styles.info}>
        {displayCount && (
          <a href="#hub" className={styles.cooked}>
            cooked {count} time{count > 1 && "s"}
          </a>
        )}
      </div>
      <div className={styles.description}>
        <span>{description}</span>
      </div>
    </div>
  );
}
