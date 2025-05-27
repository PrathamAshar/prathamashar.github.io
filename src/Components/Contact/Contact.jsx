import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <div className={styles.mailWindow}>
      <div className={styles.titleBar}>
        <span>Compose: new message</span>
        <button className={styles.closeBtn}>X</button>
      </div>
      <div className={styles.toolbar}>
        <button className={styles.button}>Send 📤</button>
        <button className={styles.button}>Attach 📎</button>
        <button className={styles.button}>Format 🖋</button>
      </div>
      <div className={styles.fields}>
        <div className={styles.field}><strong>To:</strong> pashar@terpmail.umd.edu</div>
        <div className={styles.field}><strong>CC: </strong> 
          <a href="https://github.com/prathamashar" target="_blank">github.com/prathamashar</a>,{" "}
          <a href="https://www.linkedin.com/in/prathamashar" target="_blank">linkedin.com/in/prathamashar</a>
        </div>
        <div className={styles.field}><strong>Subject:</strong> I'd like to connect! </div>
      </div>
      <textarea
        className={styles.body}
        placeholder="Type your message here..."
      />
      <div className={styles.statusBar}>
        Status: Draft • Word Count: 0 • Format: Plain Text
      </div>
    </div>
  );
};

export default Contact;
