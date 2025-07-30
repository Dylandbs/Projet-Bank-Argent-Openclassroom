const CheckboxField = ({ id, label, checked, onChange }) => {
  return (
    <div className="input-remember">
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckboxField;
