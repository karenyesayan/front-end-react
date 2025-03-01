import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "../../../hooks/useClickOutside";
import Modal from "../Modal/Modal";
import styles from "./Card.module.css";

export default function Card({ post }) {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const modalContent = (
    <div className={styles.content}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.text}>{post.text}</p>
    </div>
  );

  useClickOutside(modalRef, setShowModal);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.container}>
          <img
            alt="card-image"
            srcSet={`${post.img_2x} 1920w,${post.img} 720w`}
            sizes="(min-width: 960px) 960px,
                            360px"
            src={post.img_2x}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={styles.body}>
          <span className={styles.tag}>{post.tags}</span>
          <h2 className={styles.title}>
            <a href="#" onClick={() => setShowModal(!showModal)}>
              {post.title}
            </a>
          </h2>
          <div className={styles.meta}>
            <span>{post.autor}</span>
            <span>{post.date}</span>
            <span>{post.views} Views</span>
          </div>
          <p className={styles.text}>{post.text}</p>
        </div>
      </div>
      {(showModal || modalRef.current) &&
        createPortal(
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            centered={true}
            ref={modalRef}
          >
            {modalContent}
          </Modal>,
          document.body
        )}
    </>
  );
}
