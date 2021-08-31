const button = ({ toggleFormE, toggleVal }) => {
  return (
    <div>
      <button className="btn-sm btn-info mb-3" onClick={toggleFormE}>
        {toggleVal ? `Hide Misson` : `Add Misson`}
      </button>
    </div>
  );
};

export default button;
