import Reply from "./Reply";
import Input from "./form/Input";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/RepliesSection.module.css";
import replyStyles from "../styles/Reply.module.css";

export default function RepliesSection({ replies, onAdd }) {
  const replyRef = useRef();
  const [replyVisible, setReplyVisible] = useState(false);

  useEffect(() => {
    if (replyVisible) replyRef.current.focus();
  }, [replyVisible]);

  function handleClick() {
    setReplyVisible(true);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      if (replyRef.current.value() !== "") {
        const reply = {
          id: `reply${replies.length}`,
          user: {
            first_name: "replier",
            picture: "",
          },
          text: replyRef.current.value(),
        };
        onAdd(reply);
      }
      replyRef.current.blur();
    }
  }

  return (
    <div className={styles.section}>
      <div className={styles["control-bar"]}>
        <button className={styles.button} onClick={handleClick}>
          reply
        </button>
      </div>
      <div className={styles.replies}>
        {replies.map((reply) => (
          <Reply key={reply.id} {...reply} />
        ))}
      </div>
      {replyVisible && (
        <Input
          className={replyStyles.text}
          id="reply"
          name="reply"
          ref={replyRef}
          onBlur={() => setReplyVisible(false)}
          onKeyDown={handleKeyPress}
        />
      )}
    </div>
  );
}
