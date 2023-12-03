import './Header.css';
import { Link } from 'react-router-dom';

const textoOpcoes = ["Home", "Pets"];

function Header(){
    return (
        <header>
            <div className='logo'>
                <a href='/home'>
                    <img src='/imagens/4_patas_logo.svg' alt='Logo 4patas'></img>
                </a>
            </div>
            <nav>
                <ul>
                    {textoOpcoes.map((texto) => (
                    <Link to={`/${texto.toLowerCase()}`}>
                    <li>
                        <p>{texto}</p>
                    </li>
                    </Link>
                ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;