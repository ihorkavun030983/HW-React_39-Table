import React from "react";
import "./App.css";

class AnimalsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animals: [
        { type: `turtle`, icon: `🐢` },
        { type: `octopus`, icon: `🐙` },
        { type: `fish`, icon: `🐠` },
        { type: `flamingo`, icon: `🦩` },
        { type: `penguin`, icon: `🐧` },
      ],
    };
  }

  componentDidMount() {
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.state.animals.length);
      const newAnimals = [...this.state.animals];
      newAnimals[randomIndex].color = `green`;
      newAnimals[randomIndex].fontWeight = `bold`;
      if (randomIndex === Math.floor(this.state.animals.length / 2)) {
        this.setState({ border: `10px solid black` });
      }
      if (newAnimals.every((animal) => animal.color === `green`)) {
        this.setState({ border: `20px solid black` });
      }

      this.setState({ animals: newAnimals });
    }, 2000);
  }


render() {
  return (
    <table style={{ border: this.state.border }}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Icon</th>
        </tr>
      </thead>
      <tbody>
        {this.state.animals.map((animal, index) => (
          <tr key={index} style={{ color: animal.color, fontWeight: animal.fontWeight }}>
            <td>{animal.type}</td>
            <td>{animal.icon}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
}

export default AnimalsTable;


