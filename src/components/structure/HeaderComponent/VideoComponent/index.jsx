import "./VideoComponent.scss";

const VideoComponent = () => {
  return (
    <div className="VideoComponent" id="header">
      <video autoPlay loop muted>
        <source src="/videos/IMG_6343.MP4" type="video/mp4" />
      </video>
      <div className="VideoComponent__Overlay">
        <h1>
          Добро пожаловать в <yellow>AR Detailing Studio</yellow> - мир
          совершенства для вашего автомобиля!
        </h1>
      </div>
    </div>
  );
};

export default VideoComponent;
