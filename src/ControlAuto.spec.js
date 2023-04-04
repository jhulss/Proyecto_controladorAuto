import controladorAuto from "./ControladorAuto";

describe("Controlar auto", () => {

  it("deberia recibir una cadena vacia", () => {
    expect(controladorAuto("")).toEqual(0);
  });

  
  it("deberia devolver una cadena a un entero", () => {
    expect(controladorAuto("0")).toEqual(0);
  });


});
