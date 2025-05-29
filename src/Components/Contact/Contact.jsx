import React, { useState } from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

// ...existing code...
export const Contact = () => {
  const [message, setMessage] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [format, setFormat] = useState("Plain Text");
  const [status, setStatus] = useState("Draft");

  const handleChange = (e) => {
    const value = e.target.value;
    setMessage(value);

    const words = value.trim().split(/\s+/).filter(Boolean);
    setWordCount(words.length);
  };

  // Send button: show a sent status and clear the message
  const handleSend = () => {
    setStatus("Sent");
    setMessage("");
    setWordCount(0);
    setTimeout(() => setStatus("Draft"), 2000); // Reset status after 2s
  };

  // Format button: toggle between Plain Text and Markdown
  const handleFormat = () => {
    setFormat((prev) => (prev === "Plain Text" ? "Markdown" : "Plain Text"));
  };

  return (
    <div className={styles.mailWindow}>
      <div className={styles.titleBar}>
        <span>Compose: new message</span>
        <button className={styles.closeBtn}>X</button>
      </div>
      <div className={styles.toolbar}>
        <button className={styles.button} onClick={handleSend}>Send 📤</button>
        <button className={styles.button} onClick={handleFormat}>
          Format 🖋
        </button>
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
        value={message}
        onChange={handleChange}
      />
      <div className={styles.statusBar}>
        Status: {status} • Word Count: {wordCount} • Format: {format}
      </div>
    </div>
  );
};

export default Contact;