import React, { useState, useRef } from "react";
import styles from "./cameraPage.module.css";
import { useNavigate, Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Webcam from "react-webcam";

export default function CameraPage({ setCapturedImg }) {
  const webRef = useRef();
  const navigate = useNavigate();
  const [img, setImg] = useState();
  const [isCaptured, setIsCaptured] = useState(false);

  // handle-capture
  const handleCapture = (e) => {
    if (webRef.current.getScreenshot()) {
      setIsCaptured(true);
      setImg(webRef.current.getScreenshot());
    }
  };

  // handle-retake
  const handleRetake = (e) => {
    setIsCaptured(false);
    img && setImg("");
  };

  // toast options
  const toastOptions = {
    position: "top-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  // handle submit
  const handleSubmit = () => {
    // console.log("captured image submitting");
    if (img) {
      setCapturedImg(img);
      navigate("/avatar");
    } else {
      toast.error("Please capture your image", toastOptions);
    }
  };

  return (
    <div className={`flex-col-center ${styles.CameraPage}`}>
      <h1>{isCaptured ? "DO YOU LIKE THIS ?" : "CAPTURE YOUR PHOTO"}</h1>

      <main className={`flex-col-center ${styles.main}`}>
        <div className={styles.webcamParent}>
          {!img && (
            <Webcam
              ref={webRef}
              id={styles.webcam}
              forceScreenshotSourceSize={true}
            />
          )}

          {img && (
            <img
              src={img}
              alt="captured image"
              className={styles.capturedImage}
            />
          )}
        </div>
      </main>

      <footer className={`flex-col-center ${styles.footer}`}>
        {isCaptured ? (
          <div className={`flex-row-center ${styles.foot}`}>
            <div onClick={handleSubmit}>
              <button className={`btn1`}>SUBMIT</button>
            </div>

            <div onClick={(e) => handleRetake(e)}>
              <button className={`btn1`}>RETAKE</button>
            </div>
          </div>
        ) : (
          <div onClick={(e) => handleCapture(e)}>
            <button className={`btn1`}>CAPTURE</button>
          </div>
        )}
      </footer>
    </div>
  );
}
