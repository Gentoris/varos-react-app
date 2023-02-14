import React, { useState } from "react";

function App() {
  const [varosok, setVarosok] = useState([{ id: 1, name: "Nev 1", lakossag: "10000" }, { id: 2, name: "Nev 2", lakossag: "15000" }]);

  const addVaros = (varos: { id: number; nev: any; lakossag: any; }) => {
    setVarosok([varosok, nev, lakossag]);
  };

  const removeVaros = (id: number) => {
    setVarosok(varosok.filter((nev) => nev.id !== id));
  };

  return (
    <div>
      <h1>Városok</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Név</th>
            <th>Lakosság</th>
          </tr>
        </thead>
        <tbody>
          {varosok.map((nev) => (
            <tr key={nev.id}>
              <td>{nev.name}</td>
              <td>{nev.lakossag}</td>
              <td>
                <button onClick={() => removeVaros(nev.id)}>Eltávolít</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Város hozzáadása</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addVaros({
            id: varosok.length + 1, nev: e.target.elements.name.value,
            lakossag: undefined
          });
        }}
      >
        <input type="text" name="name" placeholder="Adja meg a város nevét" />
        <button type="submit">Hozzáadás</button>
      </form>
    </div>
  );
}

export default App;
