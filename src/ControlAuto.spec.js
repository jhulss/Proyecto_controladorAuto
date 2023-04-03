import controladorAuto from "./ControladorAuto";

describe("Controlar auto", () => {
  it("deberia recibir una primer coordenada", () => {
    expect(controladorAuto(4)).toEqual(4);
  });
});
