import "./WhatsAppComponent.scss";

const WhatsAppComponent = () => {
  return (
    <div className="WhatsAppComponent">
      <a
        href="https://Wa.me/996504777311" // правильный формат URL
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/icon_whatsapp.png" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default WhatsAppComponent;
