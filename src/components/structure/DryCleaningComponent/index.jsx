import { useEffect, useRef } from "react";
import "./DryCleaningComponent.scss";

const DryCleaningComponent = () => {
  const firstLeftRef = useRef(null);
  const firstRightRef = useRef(null);

  useEffect(() => {
    // Запускаем анимацию при монтировании компонента
    const videoElement = firstLeftRef.current;
    const textElement = firstRightRef.current;

    // Запускаем анимацию
    videoElement.classList.add("animateLeft");
    textElement.classList.add("animateRight");

    // Удаляем классы после завершения анимации
    const handleAnimationEnd = (event) => {
      event.target.classList.remove("animateLeft");
      event.target.classList.remove("animateRight");
    };

    videoElement.addEventListener("animationend", handleAnimationEnd);
    textElement.addEventListener("animationend", handleAnimationEnd);

    return () => {
      videoElement.removeEventListener("animationend", handleAnimationEnd);
      textElement.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <div className="DryCleaningComponent">
      <h2>Химчистка</h2>
      <div className="DryCleaningComponent__Descr">
        <div className="DryCleaningComponent__Descr_Left" ref={firstLeftRef}>
          <img src="/images/Химчистка1.HEIC" alt="Химчистка" />
          <img src="/images/Химчистка 2.HEIC" alt="Химчистка" />
          <img src="/images/Химчистка3.HEIC" alt="Химчистка" />
          {/* <video autoPlay loop muted>
            <source src="/videos/Химчистка.MP4" type="video/mp4" />
          </video> */}
        </div>
        <div className="DryCleaningComponent__Descr_Right" ref={firstRightRef}>
          <ul>
            <li>Химчистка с разбором</li>
            <li>Химчистка без разбора</li>
            <li>VIP мойка</li>
            <li>Мойка подкапотного пространства</li>
            <li>Днище</li>
            <li>Мойка колёсных арок и подвески</li>
            <li>Озонирование + сухой туман</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DryCleaningComponent;
