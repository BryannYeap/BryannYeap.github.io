import { IconContext } from "react-icons";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

function HomeIcons() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <IconContext.Provider value={{ size: 50 }}>
        <a
          href="https://github.com/BryannYeap"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub className="ai-icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/bryann-yeap/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin className="ai-icons" />
        </a>
        <a
          href="mailto: bryannyeapkk@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail className="ai-icons" />
        </a>
        <a href="tel: +6587773411" target="_blank" rel="noopener noreferrer">
          <AiOutlinePhone className="ai-icons" />
        </a>
      </IconContext.Provider>
    </div>
  );
}

export default HomeIcons;
