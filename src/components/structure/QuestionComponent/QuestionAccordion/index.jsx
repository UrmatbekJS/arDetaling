import { useState } from "react";
import PropTypes from "prop-types";
import "./QuestionAccordion.scss";

const QuestionAccordion = ({
  title,
  content,
  setOpenedAccordion,
  openedAccordion,
}) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
    if (title === openedAccordion) {
      setOpenedAccordion("");
    } else {
      setOpenedAccordion(title);
    }
  };

  return (
    <div className="QuestionAccordion">
      <div
        className={`QuestionAccordion__Title ${
          isContentVisible ? "QuestionTitle__Opened" : "QuestionTitle__Closed"
        }`}
        onClick={toggleContent}
      >
        <p className="SectionDescription">{title}</p>
        <p
          className={`QuestionAccordion__Title_Plus ${
            openedAccordion === title
              ? "QuestionPlus__Opened"
              : "QuestionPlus__Closed"
          }`}
        >
          +
        </p>
      </div>
      <div
        className={`QuestionAccordion__Answer ${
          openedAccordion === title
            ? "QuestionAnswer__Opened"
            : "QuestionAnswer__Closed"
        }`}
      >
        {content}
      </div>
    </div>
  );
};

// Валидация пропсов с использованием PropTypes
QuestionAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  setOpenedAccordion: PropTypes.func.isRequired,
  openedAccordion: PropTypes.string.isRequired,
};

export default QuestionAccordion;
