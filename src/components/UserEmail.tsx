type UserEmail = {
  hasEmail: boolean;
  email?: string;
};

export default function UserEmail({
  hasEmail,
  email = 'test@example.com',
}: UserEmail) {
  return <div>{hasEmail && <p>{email}</p>}</div>;
}
