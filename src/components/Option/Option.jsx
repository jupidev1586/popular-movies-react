import './index.css';

const Option = ({ filterGenre, id }) => {
  
  return (
    <option className="Option" name="filterGenre" value={filterGenre} id={id}>
     {filterGenre}
    </option>
  )

}

export default Option;