export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <div>
      <img src={avatar} alt={description} />
    </div>
  );
}
