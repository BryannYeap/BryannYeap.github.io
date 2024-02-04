import React from "react";
import CustomNavbar from "../Components/CustomNavbar";
import ProjectBody from "../Components/Projects/ProjectBody";
import ProjectHeader from "../Components/Projects/ProjectHeader";
import TechOffersRepo from "../Resources/Images/TechOffersRepo.PNG";
import GivingCoupons from "../Resources/Images/GivingCoupons.PNG";
import HangmanImage from "../Resources/Images/HangmanImage.PNG";
import IQBooster from "../Resources/Images/IQBooster.PNG";

function Projects() {
  const projectObjectArray = [
    {
      title: "Tech Offers Repo",
      image: TechOffersRepo,
      text: "In partnership with the Tech Interview Handbook (>80k stars on GitHub), my team and I created the Tech Offers Repo. The Tech Offers Repo allows job hunters to more accurately benchmark their offers against other relevant job offers by providing more context behind them. This project utilises the T3 Stack, comprised of React, Tailwind, TypeScript, tRPC, Prisma, and is deployed on Vercel.",
      projectLink: "https://app.techinterviewhandbook.org/offers",
      githubLink: "https://github.com/yangshun/tech-interview-handbook",
    },
    {
      title: "Giving Coupons",
      image: GivingCoupons,
      text: "An intiative started with my peers geared towards raising both awareness and money for charities, charitable causes, and voluntary non-profit organisations. A few campaigns were ran, which eventually raised up to 1000SGD for charities such as Make-A-Wish Singapore, Samaritans of Singapore, Handicaps Welfare Association, and more. This website is a Progressive Web App that utilises the React-based framework Next.js, as well as included integration of Firebase Authentication.",
      projectLink: "https://giving-coupons.vercel.app/",
      githubLink: "",
    },
    {
      title: "A Hero's Tale",
      demoVideo: "https://www.youtube.com/embed/Yf-hKY3F28Q",
      text: "My first ever project, made for an independent software development module at school. This is a 2D side-scrolling RPG and platformer game with elements of combat, puzzle-solving, and parkour. The game garnered a total of over 60 plays and almost 100 impressions. This project was written in C#, making use of the Unity Game Engine, and deployed on Unity Play with WebGL. To find out more, watch the demo video above.",
      projectLink: "https://play.unity.com/mg/other/a-hero-s-tale-v1-1",
      githubLink:
        "https://github.com/BryannYeap/a-heros-tale/tree/master/Assets/Scripts",
    },
    {
      title: "Peggle",
      demoVideo: "https://www.youtube.com/embed/Ba90svvAExE",
      text: "This project is a Peggle clone made for an advanced Software Engineering module in school. This project was written in Swift, and rendered using SwiftUI. It involved coding an entire physics engine and game engine from scratch and thus required programmatically solving many physics-based problems such as gravity, collision detection, collision resolution, restitution, and more. Unfortunately, since this is an iOS application that is not on the Apple app store, you will not be able to try it out. However, do watch the demo video above if you're interested in the final product!",
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
      title: "IQBooster",
      image: IQBooster,
      text: "This web application is a project from my first hackathon. It was also my first experience with Socket.IO. I programmed the backend in Node.js and Express.js, and deployed it with Render. I also contributed to the frontend in ReactJS and Vite, which was deployed using Vercel. The website has both multiplayer and single player capabilities, as well as in-game audio and CSS animations made with key frames.",
      projectLink: "https://spam2k24-main-nine.vercel.app/",
      githubLink: "https://github.com/orgs/hacknroll24/repositories",
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
