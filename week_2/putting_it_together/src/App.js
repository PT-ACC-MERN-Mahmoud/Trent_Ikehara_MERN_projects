import './App.css';
import People from './components/person.js';

const peopleArr = [
  {
    firstName: "Trent",
    lastName: "Ikehara",
    age: 22,
    hairColor: "Dark Brown",
  },
  {
    firstName: "Paul",
    lastName: "Ng",
    age: 19,
    hairColor: "Black",
  },
  {
    firstName: "Katie",
    lastName: "White",
    age: 50,
    hairColor: "Light Grey",
  },
];

function App() {
  return (
    <div className="App">
      {peopleArr.map((peopleObj, index) => (
        <People
          key={index}
          firstName={peopleObj.firstName}
          lastName={peopleObj.lastName}
          age={peopleObj.age}
          hairColor={peopleObj.hairColor}
        />
      ))}
    </div>
  );
}

export default App;

