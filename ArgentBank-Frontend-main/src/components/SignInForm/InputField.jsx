const InputField = ({ type, aria, label, id, value, onChange, input_className, container_className, disabled = false}) => {
  return (
    <div className={container_className}>
      <label htmlFor={id} aria-label={aria}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className={input_className}
        disabled={disabled}
      />
    </div>
  );
}

export default InputField; 