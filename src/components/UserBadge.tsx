type UserInfo = {
  name: string;
  isAdmin: boolean;
  isBanned: boolean;
};

export default function UserBadge({ name, isAdmin, isBanned }: UserInfo) {
  let message;
  if (isBanned) {
    message = '❌ User is banned';
  } else if (isAdmin) {
    message = '⭐ Admin';
  } else {
    message = 'Regular User ';
  }

  return (
    <>
      <p>{name}</p>
      <p>{message}</p>
    </>
  );
}
