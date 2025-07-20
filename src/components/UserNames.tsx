export default function UserNames() {
  const names = ['Alice', 'bob', 'Alfred'];
  return (
    <>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </>
  );
}
