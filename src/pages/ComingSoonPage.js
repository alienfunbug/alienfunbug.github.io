import React, { useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "./VideoPage.css";

function ComingSoonPage() {
  /*useEffect(() => {
    window.location.href = "https://www.youtube.com/watch?v=23Puq-crFXM";
  }, []);*/

  return (
    <div>

      <div className="loader-title">Coming Soon </div>
      <div className="loader-main">
        <Loader
          type="Circles"
          color="#191919"
          height={400}
          width={400}
          timeout={95000} //3 secs
        />
      </div>
    </div>
  );
}

export default ComingSoonPage;
