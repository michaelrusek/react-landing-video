import React, { Dispatch, SetStateAction } from "react";
import styles from "./Modal.module.css";

type Props = {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ modal, setModal }: Props) => {
  return (
    <>
      {modal && (
        <div onClick={() => setModal(false)} className={styles.overlay}></div>
      )}
      <div className={styles.modal}>
        <div className={styles.inner}>
          <form
            className={styles.content}
            action="https://app.getresponse.com/add_subscriber.html"
            accept-charset="utf-8"
            method="post"
          >
            <input
              type="email"
              name="email"
              className={styles.input}
              placeholder="Podaj adres email"
              required
            />
            <input type="hidden" name="campaign_token" value="uudNU" />
            <input
              type="hidden"
              name="thankyou_url"
              value="https://wspolpraca.irektomczyk.pl/video"
            />

            <input type="hidden" name="start_day" value="0" />

            <button className={styles.button} type="submit">
              Odbieram dostępdo
              <br />
              bezpłatnego video
            </button>

            <p className={styles.privacy}>
              Jeśli chcesz otrzymywać ode mne informacje o nowościach,
              promocjach, produktach lub usługach mojej firmy - Mega Biznes
              Ireneusz Tomczyk - na zasadach określonych w{" "}
              <a className={styles.link} href="#" target="_blank">
                polityce prywatności
              </a>{" "}
              wypełnij formularz podając swój adres email i kliknij w przycisk.
            </p>
          </form>
          <button
            type="button"
            className={styles.close}
            aria-labelledby="Zamknij"
            onClick={() => setModal(false)}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
