type UseCard = {
  name: string;
  age: number;
  location: string;
};

export default function UseCard(props: UseCard) {
  return (
    <div>
      Name:{props.name} <br />
      Age:{props.age}
      <br />
      Location:{props.location}
    </div>
  );
}
