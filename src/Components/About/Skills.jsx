import React from "react";
import { IconContext } from "react-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SkillCard from "./SkillCard";
import { VscCode, VscFolderLibrary, VscTools } from "react-icons/vsc";
import {
  DiJava,
  DiSwift,
  DiPython,
  DiHtml5,
  DiCss3,
  DiGo,
  DiReact,
  DiMysql,
} from "react-icons/di";
import {
  SiCsharp,
  SiTypescript,
  SiCodio,
  SiSpringboot,
  SiSvelte,
  SiExpress,
  SiUnity,
  SiGithub,
  SiGit,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiRedis,
  SiFigma,
  SiPrisma,
  SiNestjs,
  SiTailwindcss,
} from "react-icons/si";
import { FaSwift } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

function Skills() {
  return (
    <section className="parent p-5 bg-theme-grey">
      <IconContext.Provider value={{ size: 50 }}>
        <Container>
          <Row className="text-center">
            <Col md>
              <SkillCard
                icon={<VscCode />}
                title="Programming Languages"
                iconObjectArray={[
                  { icon: <DiJava />, name: "Java" },
                  { icon: <DiSwift />, name: "Swift" },
                  { icon: <DiPython />, name: "Python" },
                  { icon: <DiHtml5 />, name: "HTML5" },
                  { icon: <DiCss3 />, name: "CSS3" },
                  { icon: <SiTypescript />, name: "TypeScript" },
                  { icon: <SiCsharp />, name: "C Sharp" },
                  { icon: <SiCodio />, name: "C Language" },
                  { icon: <DiGo />, name: "Go" },
                ]}
              ></SkillCard>
            </Col>

            <Col md>
              <SkillCard
                icon={<VscFolderLibrary />}
                title="Libraries and Frameworks"
                iconObjectArray={[
                  { icon: <DiReact />, name: "ReactJS" },
                  { icon: <SiSpringboot />, name: "Spring Boot" },
                  { icon: <TbBrandNextjs />, name: "Next.js" },
                  { icon: <SiTailwindcss />, name: "TailwindCSS" },
                  { icon: <SiSvelte />, name: "Svelte" },
                  { icon: <SiNestjs />, name: "NestJS" },
                  { icon: <FaSwift />, name: "SwiftUI" },
                  { icon: <SiExpress />, name: "Express.js" },
                  { icon: <SiUnity />, name: "Unity" },
                ]}
              ></SkillCard>
            </Col>

            <Col md>
              <SkillCard
                icon={<VscTools />}
                title="Tools"
                iconObjectArray={[
                  { icon: <SiGithub />, name: "GitHub" },
                  { icon: <SiGit />, name: "Git" },
                  { icon: <SiPrisma />, name: "Prisma" },
                  { icon: <SiPostgresql />, name: "PostgreSQL" },
                  { icon: <DiMysql />, name: "MySQL" },
                  { icon: <SiMongodb />, name: "MongoDB" },
                  { icon: <SiDocker />, name: "Docker" },
                  { icon: <SiRedis />, name: "Redis" },
                  { icon: <SiFigma />, name: "Figma" },
                ]}
              ></SkillCard>
            </Col>
          </Row>
        </Container>
      </IconContext.Provider>
    </section>
  );
}

export default Skills;
