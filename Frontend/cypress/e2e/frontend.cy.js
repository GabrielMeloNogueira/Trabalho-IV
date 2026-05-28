describe("Testes do Frontend", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("Deve carregar a página principal", () => {
    cy.contains("Lista de Tarefas").should("be.visible");
  });

  it("Deve adicionar uma tarefa na lista", () => {
    cy.get("#input-tarefa").type("Estudar GitHub Actions");
    cy.get("#btn-adicionar").click();

    cy.contains("Estudar GitHub Actions").should("be.visible");
  });

  it("Deve mostrar mensagem de erro ao tentar adicionar tarefa vazia", () => {
    cy.get("#btn-adicionar").click();

    cy.contains("Digite uma tarefa antes de adicionar.").should("be.visible");
  });
});