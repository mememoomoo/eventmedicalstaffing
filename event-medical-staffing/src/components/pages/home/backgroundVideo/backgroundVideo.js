import "./assets/backgroundVideo.css";
import video from "./assets/cheering-crowd.mp4";

function BackgroundVideo() {
  return (
    <video autoPlay muted loop id="concertVideo">
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default BackgroundVideo;
