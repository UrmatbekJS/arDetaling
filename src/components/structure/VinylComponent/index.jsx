import "./VinylComponent.scss";

const VinylComponent = () => {
  return (
    <div className="VinylComponent">
      <h2>Оклейка виниловой пленкой</h2>
      <div className="VinylComponent__Descr">
        <div className="VinylComponent__Descr_Left">
          {/* <video autoPlay loop muted>
            <source src="/videos/IMG_6344.MP4" type="video/mp4" />
          </video> */}
          {/* <img src="/images/Винил1.PNG" alt="" /> */}
          <img src="/images/Винил2.PNG" alt="" />
          {/* <img src="/images/Винил3.PNG" alt="" /> */}
        </div>
        <div className="VinylComponent__Descr_Right">
          <ul>
            <li>Полный</li>
            <li>С проемами</li>
            <li>Без проемов</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VinylComponent;
