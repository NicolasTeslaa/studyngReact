import './Reatividade.css'

export function Reatividade() {

    function mostrarAluno() {
        alert('clicou');
    }

    return (
        <div>


            <button className="btn" onClick={mostrarAluno}>
                Reatividade com UseState
            </button>
        </div>
    )
}