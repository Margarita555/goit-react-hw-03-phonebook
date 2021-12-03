import s from './Filter.module.css';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
};

export default Filter;
