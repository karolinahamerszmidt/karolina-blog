import React from "react";
import "./PersonalSkills.css";

const Skill = ({ name, level }) => (
  <div className="PersonalSkill__skill">
    <div className="PersonalSkills__T">{name}</div>
    <div className="PersonalSkills__pasek">
      <div
        className={
          level > 0
            ? "PersonalSkills__pasekKropka PersonalSkills__pasekKropka_active"
            : "PersonalSkills__pasekKropka"
        }
      ></div>
      <div
        className={
          level > 1
            ? "PersonalSkills__pasekKropka PersonalSkills__pasekKropka_active"
            : "PersonalSkills__pasekKropka"
        }
      ></div>{" "}
      <div
        className={
          level > 2
            ? "PersonalSkills__pasekKropka PersonalSkills__pasekKropka_active"
            : "PersonalSkills__pasekKropka"
        }
      ></div>{" "}
      <div
        className={
          level > 3
            ? "PersonalSkills__pasekKropka PersonalSkills__pasekKropka_active"
            : "PersonalSkills__pasekKropka"
        }
      ></div>{" "}
      <div
        className={
          level > 4
            ? "PersonalSkills__pasekKropka PersonalSkills__pasekKropka_active"
            : "PersonalSkills__pasekKropka"
        }
      ></div>
    </div>
  </div>
);

export const PersonalSkills = () => (
  <div className="PersonalSkills">
    <div className="PersonalSkills__CharacterTraits">Character traits</div>
    <Skill name="Friendly" level={5} />
    <Skill name="Optimistic" level={4} />
    <Skill name="Noisy" level={2} />
    <Skill name="Open-minded" level={5} />
    <Skill name="Creative" level={5} />
    <Skill name="Rude" level={1} />
    <Skill name="Spontaneous" level={5} />
  </div>
);
