type CustomButton = {
  label: string;
};
export default function CustomButton(props: CustomButton) {
  return (
    <div>
      <button>{props.label}</button>
    </div>
  );
}
