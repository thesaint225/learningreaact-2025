type AvatarProps = {
  person: {
    name: string;
    imageId: string;
  };
  size: number;
};

function Avatar(props: AvatarProps) {
  return (
    <img
      className='avatar'
      src={`https://i.imgur.com/${props.person.imageId}.jpg`}
      alt={props.person.name}
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return (
    <Avatar person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={100} />
  );
}
