import "./PolishingComponent.scss";

const PolishingComponent = () => {
  return (
    <div className="PolishingComponent">
      <h2>Полировка</h2>

      <div className="PolishingComponent__Descr">
        <div className="PolishingComponent__Descr_List">
          <ul>
            <li>3-х этапная</li>
            <li>3-х этапная + замывка кузова</li>
            <li>Детальная</li>
            <li>Керамика только с полировкой</li>
            <li>Предпродажная полировка</li>
          </ul>
        </div>
        <div className="PolishingComponent__Descr_Video">
          <video autoPlay loop muted>
            <source src="/videos/Полировка.MP4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default PolishingComponent;
