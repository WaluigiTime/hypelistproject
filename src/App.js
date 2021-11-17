import "./styles.css";
//Write array below
export default function App() {
  return (
    <div className="First Names">
      <table>
        <th>First Name</th>
        <tr>
          <td>{hypeNames[0]}</td>
        </tr>
        <tr>
          <td>{hypeNames[1]}</td>
        </tr>
        <tr>
          <td>{hypeNames[2]}</td>
        </tr>
        <tr>
          <td>{hypeNames[3]}</td>
        </tr>
        <tr>
          <td>{hypeNames[4]}</td>
        </tr>
      </table>
      <table>
        <th>Places</th>
        <tr>
          <td>{hypePlaces[0]}</td>
        </tr>
        <tr>
          <td>{hypePlaces[1]}</td>
        </tr>
        <tr>
          <td>{hypePlaces[2]}</td>
        </tr>
        <tr>
          <td>{hypePlaces[3]}</td>
        </tr>
        <tr>
          <td>{hypePlaces[4]}</td>
        </tr>
      </table>
      <table>
        <th>Places</th>
        <tr>
          <td>{hypeColors[0]}</td>
        </tr>
        <tr>
          <td>{hypeColors[1]}</td>
        </tr>
        <tr>
          <td>{hypeColors[2]}</td>
        </tr>
        <tr>
          <td>{hypeColors[3]}</td>
        </tr>
        <tr>
          <td>{hypeColors[4]}</td>
        </tr>
      </table>
    </div>
  );
}

let hypeNames = ["Melody", "Maxwell", "Jean", "Judy", "Reginea"];

let hypePlaces = ["Brooklyn", "New Jersey", "Manhattan", "Brooklyn", "Queens"];

let hypeColors = [];

let hype;
