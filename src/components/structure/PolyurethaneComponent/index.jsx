import "./PolyurethaneComponent.scss";

const PolyurethaneComponent = () => {
  return (
    <div className="PolyurethaneComponent" id="services">
      <h2>Оклейка полиуретановой пленкой</h2>
      <div className="PolyurethaneComponent__Descr">
        <div className="PolyurethaneComponent__Descr_Right">
          <ul>
            <li>Полная</li>
            <li>
              Зона риска №1 (передний бампер, перед фары, перед
              противотуманники, зона ветровика капота, стойки перед, боковые
              крылья, боковые зеркала, подручки, передняя часть крыши до люка
              бензобака, зона погрузки багажника)
            </li>
            <li>Зона риска №2 (весь перед авто)</li>
            <li>Лобовое стекло</li>
          </ul>
        </div>

        <div className="PolyurethaneComponent__Descr_Left">
          <video autoPlay loop muted>
            <source src="/videos/IMG_6345.MP4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default PolyurethaneComponent;
