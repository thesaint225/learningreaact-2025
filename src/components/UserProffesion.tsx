import PersonCard from './PersonCard';

export default function UserProffesion() {
  const people = [
    { id: 1, name: 'Katherine', profession: 'mathematician' },
    { id: 2, name: 'Mario', profession: 'chemist' },
    { id: 3, name: 'Salam', profession: 'physicist' },
  ];
  return (
    <div>
      <ul>
        {people.map((person) => (
          <PersonCard
            key={person.id}
            name={person.name}
            profession={person.profession}
          />
        ))}
      </ul>
    </div>
  );
}
