import './ListaRacaPets.css'

const ListaSuspensa = (props) => {
    return(
        <div className="container-raca-pets">
            <label className="label-select">
                {props.label}
            </label>
            <select className="select-raca-pets">
                {props.itens.map(item=> <option key = {item}> {item}
                </option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;