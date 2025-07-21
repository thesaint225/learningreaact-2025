export default function ConditionalIcon() {
  const people = [
    { id: 1, name: 'Katherine', profession: 'mathematician' },
    { id: 2, name: 'Mario', profession: 'chemist' },
    { id: 3, name: 'Salam', profession: 'physicist' },
  ];
  const otherProfessions = people.filter(
    (otherProfession) => otherProfession.profession !== 'physicist'
  );
  return (
    <div>
      <ul>
        {otherProfessions.map((profession) => (
          <li key={profession.id}>{profession.name}✅ </li>
        ))}
      </ul>
    </div>
  );
}
