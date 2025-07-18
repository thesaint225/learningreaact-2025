type WelcomeMessage = {
  isLoggedIn: boolean;
};

export default function WelcomeMessage(props: WelcomeMessage) {
  return <div>{props.isLoggedIn ? 'Welcome back' : 'Please log in '}</div>;
}
