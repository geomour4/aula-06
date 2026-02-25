import React from "react";

import painelDebug from "./components/PainelDebug";
import controleTexto from "./components/ControleTexto";
import contadorDuplo from "./components/ContadorDuplo";


import ListaTarefas from "./components/ListaTarefas";


import ResumoFinal from "./components/ResumoFinal";

export default function App() {
  return (
    <div>
      <h1>Laboratório de Debug React</h1>

      <PainelDebug />
      <hr />

      <ControleTexto />
      <hr />

      <ContadorDuplo />
      <hr />

      <ListaTarefas />
      <hr />

      <ResumoFinal />
    </div>
  );
}