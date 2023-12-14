import RepliesSection from "./RepliesSection";
import styles from "../styles/Record.module.css";

export default function Record({ user, comment, images, replies, onAddReply }) {
  return (
    <div className={styles.record}>
      <div className={styles["user-identifier"]}>
        <img className={"user-image"} src={user.picture} alt="" />
        <h3>{user.first_name}</h3>
      </div>
      <div className={styles["comment-control"]}>
        <p className={styles.comment}>{comment}</p>
      </div>
      <div className={styles["images-bar"]}>
        {images.map((image) => (
          <img key={image.id} className={styles.image} src={image.img} alt="" />
        ))}
      </div>
      <RepliesSection replies={replies} onAdd={onAddReply} />
      <div className={styles.footer}>
        <p className={styles.date}>Dec. 12th 2023</p>
      </div>
    </div>
  );
}
