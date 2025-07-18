type AlertButton = {
  label: string;
  onclick: () => void;
};

export default function AlertButton(props: AlertButton) {
  return (
    <div>
      <button onClick={props.onclick}>{props.label}</button>
    </div>
  );
}
