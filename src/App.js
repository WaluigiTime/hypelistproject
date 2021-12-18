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
          <th>Month of Birth</th>
          <th>Year of Birth</th>
          <th>Dream Place to Visit</th>
          <th>Favorite Food</th>
          <th>Prefer Cats or Dogs</th>
          <th>Hobbies</th>
          <th>Career You're Interested In</th>
        </tr>

        <tr>
          <td>{hypeNames[0]}</td>
          <td>{hypePlaces[0]}</td>
          <td style={{ backgroundColor: hypeColors[0] }}>{hypeColors[0]}</td>
          <td>{hypeMonths[0]}</td>
          <td>{hypeYears[0]}</td>
          <td>{hypeDreams[0]}</td>
          <td>{hypeFoods[0]}</td>
          <td>{hypePets[0]}</td>
          <td>{hypeHobbies[0]}</td>
          <td>{hypeCareers[0]}</td>
        </tr>
        <tr>
          <td>{hypeNames[1]}</td>
          <td>{hypePlaces[1]}</td>
          <td style={{ backgroundColor: hypeColors[1] }}>{hypeColors[1]}</td>
          <td>{hypeMonths[1]}</td>
          <td>{hypeYears[1]}</td>
          <td>{hypeDreams[1]}</td>
          <td>{hypeFoods[1]}</td>
          <td>{hypePets[1]}</td>
          <td>{hypeHobbies[1]}</td>
          <td>{hypeCareers[1]}</td>
        </tr>
        <tr>
          <td>{hypeNames[2]}</td>
          <td>{hypePlaces[2]}</td>
          <td style={{ backgroundColor: hypeColors[2] }}>{hypeColors[2]}</td>
          <td>{hypeMonths[2]}</td>
          <td>{hypeYears[2]}</td>
          <td>{hypeDreams[2]}</td>
          <td>{hypeFoods[2]}</td>
          <td>{hypePets[2]}</td>
          <td>{hypeHobbies[2]}</td>
          <td>{hypeCareers[2]}</td>
        </tr>
        <tr>
          <td>{hypeNames[3]}</td>
          <td>{hypePlaces[3]}</td>
          <td style={{ backgroundColor: hypeColors[3] }}>{hypeColors[3]}</td>
          <td>{hypeMonths[3]}</td>
          <td>{hypeYears[3]}</td>
          <td>{hypeDreams[3]}</td>
          <td>{hypeFoods[3]}</td>
          <td>{hypePets[3]}</td>
          <td>{hypeHobbies[3]}</td>
          <td>{hypeCareers[3]}</td>
        </tr>
        <tr>
          <td>{hypeNames[4]}</td>
          <td>{hypePlaces[4]}</td>
          <td style={{ backgroundColor: hypeColors[4] }}>{hypeColors[4]}</td>
          <td>{hypeMonths[4]}</td>
          <td>{hypeYears[4]}</td>
          <td>{hypeDreams[4]}</td>
          <td>{hypeFoods[4]}</td>
          <td>{hypePets[4]}</td>
          <td>{hypeHobbies[4]}</td>
          <td>{hypeCareers[4]}</td>
        </tr>
      </table>
    </div>
  );
}
// [{}, {}, {}]
let peopleInfo = [
  {
    Name: "Melody",
    Place: "Brooklyn",
    Color: "#c8a2c8",
    BirthYear: "2003",
    BirthMonth: "May" // looking good!
  },
  {
    Name: "Maxwell",
    Place: "New Jersey",
    Color: "#ebba34",
    BirthYear: "1992",
    BirthMonth: "February"
    // More info here! :D
  },
  {
    Name: "Jean",
    Place: "Manhattan",
    Color: "#2a693b",
    BirthYear: "2005",
    BirthMonth: "January"
    // More info here! :D
  },
  {
    Name: "Judy",
    Place: "Brooklyn",
    Color: "#cd94f2",
    BirthYear: "1991",
    BirthMonth: "January"
    // More info here! :D
  },
  {
    Name: "Reginea",
    Place: "Queens",
    Color: "#eb7d34",
    BirthYear: "2005",
    BirthMonth: "August"
    // More info here! :D
  }
];

let hypeNames = ["Melody", "Maxwell", "Jean", "Judy", "Reginea"];

let hypePlaces = ["Brooklyn", "New Jersey", "Manhattan", "Brooklyn", "Queens"];

let hypeColors = ["#c8a2c8", "#ebba34", "#2a693b", "#cd94f2", " #eb7d34"];

let hypeYears = ["2003", "1992", "2005", "1991", "2005"];

let hypeMonths = ["May", "February", "January", "January", "August"];

let hypeDreams = [
  "Fukuoka, Japan",
  "France",
  "Japan",
  "Korea",
  "The whole world but Japan and Korea"
];

let hypeFoods = [
  "Everything",
  "Burgers and Fries",
  "Lasagna",
  "Ramen",
  "Pizza"
];

let hypePets = ["Both, in favor of Cat", "Dog", "Dog", "Dog", "Dog"];

let hypeHobbies = [
  "Drawing",
  "Watching Movies",
  "Video Games",
  "Reading",
  "Writing"
];

let hypeCareers = [
  "Tech/Art/Fashion",
  "Teacher",
  "Software Engineer",
  "Software Engineer",
  "Fashion designer, Youtuber, Write/Create an Anime, Write Music"
];
