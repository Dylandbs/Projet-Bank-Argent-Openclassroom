const InputField = ({ type, aria, label, id, value, onChange, className, disabled = false}) => {
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
        className={className}
        disabled={disabled}
      />
    </div>
  );
}

export default InputField; 