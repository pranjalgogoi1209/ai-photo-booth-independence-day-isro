import React, { useState, useRef } from "react";
import styles from "./outputPage.module.css";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import Qr from "../../components/qr/Qr";
import Email from "../../components/email/Email";
import Loader from "../../components/loader/Loader";

export default function OutputPage({ generatedImg, url, setUrl }) {
  const printRef = useRef();
  const [showQr, setShowQr] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  // handle print
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <div className={`flex-col-center ${styles.OutputPage}`}>
      <h1>{generatedImg ? "READY TO DOWNLOAD ?" : "PLEASE WAIT...!"}</h1>

      {generatedImg ? (
        <div className={`flex-col-center ${styles.generatedImgContainer}`}>
          <div className={styles.imgContainer}>
            <img ref={printRef} src={generatedImg} alt="generated-image" />
          </div>

          <div className={`flex-row-center ${styles.btnContainer}`}>
            {/* generate qr */}
            <div
              onClick={() => setShowQr(true)}
              // className={`imgContainer ${styles.btn}`}
            >
              <button className={`btn2`}>QR</button>
            </div>

            {/* email */}
            <div
              onClick={() => setShowEmail(true)}
              /* className={`imgContainer ${styles.btn}`} */
            >
              {/*  <img src={emailBtn} alt="generate-qr-button" /> */}
              <button className={`btn2`}>EMAIL</button>
            </div>

            {/* print */}
            {/* <div onClick={handlePrint} className={`imgContainer ${styles.btn}`}>
              <img src={printBtn} alt="generate-qr-button" />
            </div> */}

            <Link to={"/"}>
              <button className={`btn2`}>HOME</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.loader}>
          {/* <img src={loader} alt="loader" /> */}
          <Loader />
        </div>
      )}

      {/* qr */}
      {showQr && <Qr url={url} setShowQr={setShowQr} />}

      {/* email */}
      {showEmail && <Email setShowEmail={setShowEmail} url={url} />}
    </div>
  );
}
