import React from "react";

export default class Stagiaire extends React.Component {
  constructor() {
    super();
    this.state = {
      nom: "",
      e: "",
      l: "",
      niveau: "",
      infos: [],
    };
    this.etablissement = ["Lazaret", "Aounia", "centre mixte"];
    this.languages = ["php", "js", "java"];
    this.niveau = ["n1", "n2", "n3"];
  }

  handleSubmit = (r) => {
    r.preventDefault();
    this.setState({
      infos: [...this.state.infos, { name: this.state.nom, eta: this.state.e, lgg: this.state.l, niveau: this.state.niveau }],
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Nom</label>
          <input type="text" value={this.state.nom} onChange={(e) => this.setState({ nom: e.target.value })} />

          <label>Etablissement</label>
          {this.etablissement.map((i, index) => (
            <div key={index}>
              <input type="radio" checked={this.state.e === i} onChange={(e) => this.setState({ e: e.target.value })} name="e" value={i} />
              <label>{i}</label>
            </div>
          ))}

          <label>Languages</label>
          {this.languages.map((i, index) => (
            <div key={index}>
              <input type="checkbox" checked={this.state.l.includes(i)} onChange={(e) => this.setState({ l: e.target.checked ? [...this.state.l, i] : this.state.l.filter((lang) => lang !== i) })} value={i} name="l" />
              <label>{i}</label>
            </div>
          ))}
          <label>Niveau</label>
          <select value={this.state.niveau} onChange={(e) => this.setState({ niveau: e.target.value })}>
            <option>Choisir un niveau</option>
            {this.niveau.map((i, index) => (
              <option key={index} value={i}>
                {i}
              </option>
            ))}
          </select>

          <input type="submit" />
        </form>

        <table border={1}>
          <tr>
            <td>Nom</td>
            <td>Etablissement</td>
            <td>Languages</td>
            <td>Niveau</td>
          </tr>
          {this.state.infos.map((i) => (
            <tr>
              <td>{i.name}</td>
              <td>{i.eta}</td>
              <td>{i.lgg.join(", ")}</td>
              <td>{i.niveau}</td>
            </tr>
          ))}
        </table>
      </>
    );
  }
}