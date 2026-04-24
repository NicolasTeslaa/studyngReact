import { Header } from "./components/Header";
import { Reatividade } from "./components/Reatividade";

export default function App() {
  return (
    <div>
      <Reatividade/>
    </div>
  )
}

// a interface não é necessáriamente obrigatória
interface AlunoProps {
  nome?: string;
  idade?: number;
}

function Aluno({ nome, idade }: AlunoProps // se não quiser usar interface pode por any 
) {
  return (
    <div>
      <h2>Aluno: {nome}</h2>
      <h2>Idade: {idade}</h2>
      ----------------------
    </div>
  )
}