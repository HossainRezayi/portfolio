import React from "react";

const skills = [
  { id: 1, name: "HTML", icon: "/skills/html.svg" },
  { id: 2, name: "CSS", icon: "/skills/css.svg" },
  { id: 3, name: "Sass", icon: "/skills/sass.svg" },
  { id: 4, name: "Tailwind", icon: "/skills/tailwind.svg" },
  { id: 5, name: "Javascript", icon: "/skills/javascript.svg" },
  { id: 6, name: "React JS", icon: "/skills/react.svg" },
  { id: 7, name: "Git", icon: "/skills/git.svg" },
];

const Skills = () => {
  return (
    <section className="my-20">
      <h1 className="text-5xl text-center mb-10">Skills</h1>

      <div className="flex gap-8 justify-center">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col justify-center text-center"
          >
            <img src={skill.icon} alt={skill.name} width={64} height={64} />
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
