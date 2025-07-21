type Card = {
  name: string;
  profession: string;
};

export default function PersonCard({ name, profession }: Card) {
  return (
    <div>
      <strong>{name}</strong>:{profession}
    </div>
  );
}
