type User = {
  name: string;
  age: number;
  email: string;
};

export default function UserInfo({ name, age, email }: User) {
  return (
    <div>
      name:{name}
      <br />
      age:{age}
      <br />
      email:{email}
    </div>
  );
}
