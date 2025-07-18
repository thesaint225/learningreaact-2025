// type greetingProps = {
//   name: string;
// };
// export default function Greeting(props: greetingProps) {
//   return (
//     <div>
//       <h1>hello,{props.name}!</h1>
//     </div>
//   );
// }

type GreetingTpe = {
  name: string;
};

export default function Greeting(props: GreetingTpe) {
  return (
    <div>
      <h1>hello form {props.name}</h1>
    </div>
  );
}
