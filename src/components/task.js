import Single from "./singleTask";

const Task = ({ tasks, deleteE, toggleE }) => {
  return (
    <div>
      {tasks.map((t) => (
        <Single key={t.id} task={t} deleteE={deleteE} toggleE={toggleE} />
      ))}
    </div>
  );
};

export default Task;
