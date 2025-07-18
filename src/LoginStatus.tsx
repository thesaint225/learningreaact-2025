type Login = {
  isLoggedIn: boolean;
};

// export default function LoginStatus(props: Login) {
//   return (
//     <div>{props.isLoggedIn ? <p>welcome back</p> : <p> please log in </p>}</div>
//   );
// }
export default function LoginStatus(props: { isLoggedIn: boolean }) {
  if (props.isLoggedIn) {
    return <p>Welcome back</p>;
  } else {
    return <p>Please log in</p>;
  }
}
