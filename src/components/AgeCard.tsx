type AgeCard = {
  name: string;
  age: number;
};

export default function AgeCard(props: AgeCard) {
  return (
    <div>
      <h1>
        iam {props.name} and {props.age} years old{' '}
      </h1>
    </div>
  );
}
