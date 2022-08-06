import React from "react";
import CustomNavbar from "../Components/CustomNavbar";
import ProjectBody from "../Components/Projects/ProjectBody";
import ProjectHeader from "../Components/Projects/ProjectHeader";
import HangmanImage from "../Resources/Images/HangmanImage.PNG";
import CatPictureTelegramBotImage from "../Resources/Images/CatPictureTelegramBotImage.PNG";
import PersonalPortfolioImage from "../Resources/Images/PersonalPortfolioImage.PNG";

function Projects() {
  const projectObjectArray = [
    {
      title: "A Hero's Tale",
      demoVideo: "https://www.youtube.com/embed/Yf-hKY3F28Q",
      text: "My first ever project, made for an independent software development module at school. This is a 2D side-scrolling RPG and platformer game with elements of combat, puzzle-solving, and parkour. I wrote the all the code, while my partner drew virtually all of the art shown in the game. This project was written in C#, making use of the Unity Game Engine, and deployed on Unity Play with WebGL. To find out more, watch the demo video above.",
      projectLink: "https://play.unity.com/mg/other/a-hero-s-tale-v1-1",
      githubLink:
        "https://github.com/BryannYeap/a-heros-tale/tree/master/Assets/Scripts",
    },
    {
      title: "Peggle",
      demoVideo: "https://www.youtube.com/embed/Ba90svvAExE",
      text: "This project is a Peggle clone made for an advanced Software Engineering module in school. This project was written in Swift, using the MVVM pattern, and rendered using SwiftUI. This project involved coding an entire physics engine and game engine from scratch, as well as integrating them with many design patterns. Unfortunately, since this is an iOS application that is not on the Apple app store, you will not be able to try it out.",
      projectLink: "",
      githubLink: "https://github.com/BryannYeap/Peggle",
    },
    {
      title: "Hangman",
      image: HangmanImage,
      text: "My rendition of the classic game: Hangman. This was my first ReactJS project, and makes use of hooks and the Context API. The website takes both keyboard and mouse inputs. It is fully responsive, and includes CSS animations made with key frames. This project was deployed using Netlify.",
      projectLink: "https://hang-man-react-js.netlify.app/",
      githubLink: "https://github.com/BryannYeap/Hangman---ReactJS",
    },
    {
      title: "Cat Picture Telegram Bot",
      image: CatPictureTelegramBotImage,
      text: "A telegam bot that sends cute cat pictures, what else could a man want! This bot requests pictures from an external API, and processes it based on your input before sending it. Persistence was implemented using MongoDB, allowing the bot to save your preferred cat picture configurations. Being deployed on Heroku, it might take a while (~15s) to start up due to inactivity.",
      projectLink: "https://t.me/cat_picture_bot",
      githubLink: "https://github.com/BryannYeap/Cat-Telegram-Bot",
    },
    {
      title: "Personal Portfolio Website",
      image: PersonalPortfolioImage,
      text: "This portfolio website itself was built using ReactJS, Bootstrap, and some custom CSS styling. This was deployed on GitHub using GitHub Pages.",
      projectLink: "https://bryannyeap.github.io/",
      githubLink: "https://github.com/BryannYeap/BryannYeap.github.io",
    },
  ];

  return (
    <div className="fade">
      <CustomNavbar />
      <ProjectHeader />
      <ProjectBody projectObjectArray={projectObjectArray} />
    </div>
  );
}

export default Projects;
