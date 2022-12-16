export default function SkillList({ skill }) {
  return (
    <li className="pt-2">
      <span className="pr-4">{skill.name}</span>
      <span className="bg-blue-100 text-blue-800 text-md font-semibold mr-2 px-2.5 py-0.5 rounded ">
        {skill.level}
      </span>
    </li>
  );
}
