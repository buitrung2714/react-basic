import { useState } from "react";

const InsertTask = ({ addData }) => {
  const [misson, setMisson] = useState("");
  const [date, setDate] = useState("");
  const [remind, setRemind] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (misson === "" || date === "") {
      alert("Không được bỏ trống..");
      return;
    }
    addData({ misson, date, remind });
    setMisson("");
    setDate("");
    setRemind(false);
  };

  return (
    <form id="add-form" onSubmit={submit}>
      <div className="form-group">
        <label>Misson:</label>
        <input
          type="text"
          value={misson}
          className="form-control"
          onChange={(e) => setMisson(e.target.value)}
          placeholder="Nhập nhiệm vụ..."
        />
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.currentTarget.value)}
          className="form-control"
          placeholder="Nhập ngày..."
        />
      </div>
      <div className="form-group">
        <label>Remind:</label>
        <input
          type="checkbox"
          checked={remind}
          onChange={(e) => setRemind(e.currentTarget.checked)}
          className="form-check-input"
        />
      </div>
      <button className="btn btn-primary form-control">Save</button>
    </form>
  );
};

export default InsertTask;
