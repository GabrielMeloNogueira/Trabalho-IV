describe("Testes do Backend", () => {
  const apiUrl = "http://localhost:3000";

  it("Deve verificar se o backend está funcionando", () => {
    cy.request(`${apiUrl}/`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.mensagem).to.eq("Backend funcionando!");
    });
  });

  it("Deve listar as tarefas", () => {
    cy.request(`${apiUrl}/tarefas`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
    });
  });

  it("Deve criar uma nova tarefa", () => {
    cy.request("POST", `${apiUrl}/tarefas`, {
      titulo: "Nova tarefa de teste"
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.titulo).to.eq("Nova tarefa de teste");
      expect(response.body.concluida).to.eq(false);
    });
  });

  it("Não deve criar tarefa sem título", () => {
    cy.request({
      method: "POST",
      url: `${apiUrl}/tarefas`,
      body: {},
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.erro).to.eq("O título é obrigatório");
    });
  });
});