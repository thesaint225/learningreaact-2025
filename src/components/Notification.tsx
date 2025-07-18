type Notification = {
  count: number;
};
export default function Notification({ count }: Notification) {
  return <div>{count > 0 && <p>you have {count} new message</p>}</div>;
}
