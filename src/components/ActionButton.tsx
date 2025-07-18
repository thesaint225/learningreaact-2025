type ActionButton = {
  IsSubmitted: boolean;
};
function ShowAlert() {
  alert('Thank for submitting');
}
function submit() {
  alert('submit please ');
}

export default function ActionButton({ IsSubmitted }: ActionButton) {
  return (
    <div>
      {IsSubmitted ? (
        <button onClick={ShowAlert}>click me</button>
      ) : (
        <button onClick={submit}>click here</button>
      )}
    </div>
  );
}
