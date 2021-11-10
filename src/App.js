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
    </div>

    /*
<div className="Places">

[ Confused as to why this code
1. makes it to where I cannot use the arrays
2. breaks everything ]

<table>
  <th>First Name</th>
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
</div>
*/
  );
}

let hypeNames = ["Melody", "Maxwell", "Jean", "Judy", "Reginea"];

let hypePlaces = [];

let hypeColors = [];

let hype;
