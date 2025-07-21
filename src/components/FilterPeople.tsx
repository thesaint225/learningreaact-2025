export default function FilterPeople() {
  const people = [
    { id: 1, name: 'Katherine', profession: 'mathematician' },
    { id: 2, name: 'Mario', profession: 'chemist' },
    { id: 3, name: 'Salam', profession: 'physicist' },
  ];
  const chemists = people.filter((person) => person.profession === 'chemist');

  return (
    <div>
      <ul>
        {chemists.map((chemist) => (
          <li key={chemist.id}>
            {chemist.name}:{chemist.profession}
          </li>
        ))}
      </ul>
    </div>
  );
}
