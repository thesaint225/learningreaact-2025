type profilePic = {
  imageUrl: string;
  altText: string;
};

export default function profilePic(props: profilePic) {
  return (
    <div>
      <img src={props.imageUrl} alt={props.altText} />
    </div>
  );
}
