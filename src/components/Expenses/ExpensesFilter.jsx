import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  const dropDownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  let yearsOptions = [];
  let currentYear = new Date().getFullYear();
  for (let i = 2020; i <= currentYear; i++) {
    yearsOptions.push(i);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter By Year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          {/* <option value='2020'>2020</option> */}
          {yearsOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
