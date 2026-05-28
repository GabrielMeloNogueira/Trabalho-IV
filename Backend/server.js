const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let tarefas = [
  { id: 1, titulo: "Estudar Cypress", concluida: false },
  { id: 2, titulo: "Criar backend com Express", concluida: false }
];

app.get("/", (req, res) => {
  res.json({ mensagem: "Backend funcionando!" });
});

app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

app.post("/tarefas", (req, res) => {
  const { titulo } = req.body;

  if (!titulo) {
    return res.status(400).json({ erro: "O título é obrigatório" });
  }

  const novaTarefa = {
    id: tarefas.length + 1,
    titulo,
    concluida: false
  };

  tarefas.push(novaTarefa);

  res.status(201).json(novaTarefa);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});