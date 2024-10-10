import "./FooterComponent.scss";

const FooterComponent = () => {
  const phoneNumber = "+996504777311"; // Замените на ваш номер телефона

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="FooterComponent" id="footer">
      <h2>Наше местоположение</h2>
      <h3>Город Бишкек, ул. Жибек-Жолу 404</h3>
      <p>Вы можете найти нас в</p>

      <div className="FooterComponent__Img">
        <a
          href="https://2gis.kg/bishkek/geo/70000001057377685"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/2gis-icon.png" alt="2GIS" id="twogis" />
        </a>
        <a
          href="https://www.instagram.com/ar_detailing_studio?igsh=dXRuNjdyYTRzMWM5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/instagram-icon.png"
            alt="Instagram"
            id="instagram"
          />
        </a>
        <a
          href="https://www.tiktok.com/@ar_detailing_studio?_t=8qQHk8U2vp7&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/tiktok-icon.png" alt="TikTok" id="tiktok" />
        </a>
        <a
          href="https://Wa.me/996504777311"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/whatsapp-icon.png" alt="Whatsapp" id="whatsapp" />
        </a>
      </div>
      <h2 className="FooterComponent__Call" onClick={handleCall}>
        +996 504 777 311
      </h2>
      <div className="FooterComponent__Creator">
        <div className="FooterComponent__Creator_Left">
          <p>Made by </p>
        </div>
        <div className="FooterComponent__Creator_Right">
          <a
            href="https://www.instagram.com/sadykov__u?igsh=ZXB2dHJqbzBpcW1q "
            rel="noopener noreferrer"
            target="_blank"
            className="FooterComponent__Creator_Right_Link"
          >
            <img src="/images/icon_instagram_small.png" alt="Instagram" />
            <p>sadykov__u</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
