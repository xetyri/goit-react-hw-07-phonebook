import s from './Filter.module.css'

export default function Filter({value,onChange}) {

  return (
    <label className={s.elem}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={s.input}
        value={value}
        onChange={onChange}
        placeholder="Enter name "
      />
    </label>
  );
}

