import { useState, useEffect } from "react";
import Protypes from "prop-types";
import Button from "./button.js";
import Task from "./task.js";
import FormAdd from "./InsertTask";
import About from "./About";
import Footer from "./Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (prop) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setTasks(await fetchTask());
    };
    getData();
  }, []);
  const fetchTask = async () => {
    const res = await fetch("http://localhost:3000/tasks");
    const data = await res.json();
    return data;
  };
  const fetchIDTask = async (id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`);
    const data = await res.json();
    return data;
  };
  const toggleE = async (id) => {
    const getMisson = await fetchIDTask(id);
    const updateMisson = { ...getMisson, remind: !getMisson.remind };

    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateMisson),
    });
    const data = await res.json();
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, remind: !data.remind } : t))
    );
  };
  const deleteE = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((t) => t.id !== id));
  };
  const addE = async (data) => {
    const res = await fetch(`http://localhost:3000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newMisson = await res.json();
    setTasks([...tasks, newMisson]);
  };
  const [showTask, setShowTask] = useState(false);
  return (
    <Router>
      <div className="box">
        <h1 style={titleCss}>Hello {prop.fullname}</h1>
        <Button
          toggleFormE={() => setShowTask(!showTask)}
          toggleVal={showTask}
        />
        {showTask && <FormAdd addData={addE} />}
        <Route path="/about" component={About} />

        <Route path="/" exact>
          <h3 className="title">My misson:</h3>
          <Task tasks={tasks} deleteE={deleteE} toggleE={toggleE} />
        </Route>

        <Footer />
      </div>
    </Router>
  );
};

const titleCss = {
  color: "red",
  backgroundColor: "black",
};
Header.defaultProps = {
  fullname: "Bui Duc Trung",
  age: 23,
};
Header.Protypes = {
  fullname: Protypes.string.isRequired,
  age: Protypes.string.isRequired,
};

export default Header;
