import "./styles.css";
//Write array below
export default function App() {
  return (
    <div className="Entire List">
      <table>
        <tr>
          <th>First Name</th>
          <th>Places</th>
          <th>Colors</th>
        </tr>

        <tr>
          <td>{hypeNames[0]}</td>
          <td>{hypePlaces[0]}</td>
          <td style={{ backgroundColor: hypeColors[0] }}>{hypeColors[0]}</td>
        </tr>
        <tr>
          <td>{hypeNames[1]}</td>
          <td>{hypePlaces[1]}</td>
          <td style={{ backgroundColor: hypeColors[1] }}>{hypeColors[1]}</td>
        </tr>
        <tr>
          <td>{hypeNames[2]}</td>
          <td>{hypePlaces[2]}</td>
          <td style={{ backgroundColor: hypeColors[2] }}>{hypeColors[2]}</td>
        </tr>
        <tr>
          <td>{hypeNames[3]}</td>
          <td>{hypePlaces[3]}</td>
          <td style={{ backgroundColor: hypeColors[3] }}>{hypeColors[3]}</td>
        </tr>
        <tr>
          <td>{hypeNames[4]}</td>
          <td>{hypePlaces[4]}</td>
          <td style={{ backgroundColor: hypeColors[4] }}>{hypeColors[4]}</td>
        </tr>
      </table>
    </div>
  );
}

let hypeNames = ["Melody", "Maxwell", "Jean", "Judy", "Reginea"];

let hypePlaces = ["Brooklyn", "New Jersey", "Manhattan", "Brooklyn", "Queens"];

let hypeColors = ["#c8a2c8", "#ebba34", "#2a693b", "#cd94f2", " #eb7d34"];

// placeholder till I display the colors myself
// at least in text?

let hypeYear = ["2003", "1992", "2005", "1991", "2005"];

let hypeMonth = ["May", "February", "January", "January", "August"];
