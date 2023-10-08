import './FotoDoPet.css'

const FotoDoPet = (props) => {
    return (
        <div className="fotodopet">
            <label>{props.label}</label>
            <input type="file" placeholder={props.placeholder}/>
        </div>
      );
}

export default FotoDoPet;