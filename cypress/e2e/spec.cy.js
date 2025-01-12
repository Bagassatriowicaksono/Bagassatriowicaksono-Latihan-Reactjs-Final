describe("User login", () => {
  it("should allow user to log in with valid credentials", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    // Klik tombol untuk mengaktifkan mode gelap
    cy.get("button")
      .contains("Switch to Dark Mode")
      .should("be.visible")
      .click();

    

    // Lanjutkan pengujian login
    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    // Verifikasi halaman setelah login
    cy.get("nav").should("be.visible");
    cy.get("header").should("be.visible");
    cy.wait(5000);
  });

  it("should not allow user to log in with invalid credentials", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    // Klik tombol untuk mengaktifkan mode gelap
    cy.get("button")
      .contains("Switch to Dark Mode")
      .should("be.visible")
      .click();

    // Lanjutkan pengujian login
    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123")
      .should("have.value", "123");

    cy.get("button").contains("Login").click();

    // Verifikasi pesan kesalahan
    cy.get("div").contains("Wrong Password").should("be.visible");
  });
});
