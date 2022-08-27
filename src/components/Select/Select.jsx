import './index.css';

const Select = ({ children }) => {
  
  return (
    <select name="filterGenre" id="filterGenre">
      {children}
    </select>
  )

}

export default Select;