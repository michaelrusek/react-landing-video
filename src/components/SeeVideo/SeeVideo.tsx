import React, { useState } from "react";
import styles from "./SeeVideo.module.css";
import Modal from "../Modal/Modal";

const SeeVideo = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div>
      <h1 className={styles.heading}>
        Tak zrobiony AUTOWEBINAR, sprzedaje nawet bardzo drogie produkty bez
        rozmowy telefonicznej. Działa w każdej branży.
      </h1>
      <button onClick={() => setModal(true)} className={styles.button}>
        ZOBACZ VIDEO
      </button>

      {modal && <Modal modal={modal} setModal={setModal} />}
    </div>
  );
};

export default SeeVideo;
