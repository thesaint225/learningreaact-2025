type AccountUser = {
  username: string;
  isActive: boolean;
};

export default function AccountStatus({ username, isActive }: AccountUser) {
  let message;
  if (isActive) {
    message = `welcome ${username}`;
  } else {
    message = '⛔ Account inactive';
  }
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
