const InputField = ({ type, aria, label, id, value, onChange }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id} aria-label={aria}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="input-field"
      />
    </div>
  );
}

export default InputField; 