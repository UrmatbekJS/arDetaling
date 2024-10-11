import "./NoiseInsulationComponent.scss";

const NoiseInsulationComponent = () => {
  return (
    <div className="NoiseInsulationComponent">
      <h2>Шумоизоляция</h2>
      <div className="NoiseInsulationComponent__Descr">
        <div className="NoiseInsulationComponent__Descr_Right">
          <img src="/images/Шумоизоляция.JPG" alt="" />
          {/* <video autoPlay loop muted>
            <source src="/videos/Шумоизоляция.MP4" type="video/mp4" />
          </video> */}
        </div>
        <div className="NoiseInsulationComponent__Descr_Left">
          <ul>
            <li>Без арок</li>
            <li>С арками</li>
            <li>Верхний багаж</li>
            <li>Арки</li>
            <li>Двери</li>
            <li>Антискрип</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NoiseInsulationComponent;
