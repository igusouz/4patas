import './DataNascimentoPet.css'

const DataNascimentoPet = (props) => {
    return (
        <div className="dataNascimento-pet">
            <label>{props.label}</label>
            <input type="date" placeholder={props.placeholder}/>
        </div>
      );
}

export default DataNascimentoPet;