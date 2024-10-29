import './User.css'

interface UserProps {
  name: string;
  age: number;
  isOnline: boolean;
}

const User = (props: UserProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.age} ans</p>
      <div className={props.isOnline ? "online" : "offline"}>
        {props.isOnline ? "En ligne" : "Hors ligne"}
      </div>
    </div>
  );
};

export default User;
