import React, { useState } from "react";
import styles from "./SeeVideo.module.css";
import Modal from "../Modal/Modal";
import irek from "../../img/it.jpg";
import logo from "../../img/IT-black.png";

const SeeVideo = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div>
      <img
        className={styles.photo}
        src={irek}
        width={150}
        height={150}
        alt="Ireneusz Tomczyk"
      />
      <img src={logo} width={150} className={styles.logo} />
      <h1 className={styles.heading}>
        Jeśli jesteś przedsiębiorcą, handlowcem, agentem nieruchomości lub
        doradcą oze i chcesz w ciągu kilku miesięcy zbudować solidne źródło
        dodatkowych dochodów, wykorzystując swoje umiejętności i dotychczasowe
        kontakty - obejrzyj krótkie video i skontaktuj się ze mną
      </h1>
      <button onClick={() => setModal(true)} className={styles.button}>
        ODBIERAM DOSTĘP
      </button>

      {modal && <Modal modal={modal} setModal={setModal} />}
    </div>
  );
};

export default SeeVideo;
