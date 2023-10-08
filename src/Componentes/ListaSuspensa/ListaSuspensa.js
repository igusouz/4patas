import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className="container-lista-suspensa">
            <label className="label-select">
                {props.label}
            </label>
            <select className="select-tipo-animal">
                {props.itens.map(item=> <option key = {item}> {item}
                </option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;