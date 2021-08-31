import { FaTimesCircle } from "react-icons/fa";

const singleTask = ({ task, deleteE, toggleE }) => {
  return (
    <div>
      <p
        className={task.remind ? `finished` : null}
        style={stylingMisson}
        onClick={() => toggleE(task.id)}
      >
        {task.misson} - {task.date}{" "}
      </p>
      <FaTimesCircle style={stylingIcon} onClick={() => deleteE(task.id)} />
    </div>
  );
};

const stylingMisson = {
  color: "green",
  cursor: "pointer",
  display: "inline",
};
const stylingIcon = {
  color: "red",
  cursor: "pointer",
};
export default singleTask;
