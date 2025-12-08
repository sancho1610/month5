import 'antd/dist/reset.css';
import { Block } from "./components/Block";

function App() {
  const users = [
    { id: 1, name: "Arthur Morgan", age: 37, city: "West Elizabeth", active: true, img: 'https://i.pinimg.com/736x/e4/d8/c2/e4d8c2a8cdb0875a555cf2655acea19c.jpg' },
    { id: 2, name: "John Marston", age: 38, city: "New Austin", active: false, img: 'https://i.pinimg.com/736x/13/7f/c8/137fc822226e05a5282fee0eac3e130a.jpg' },
    { id: 3, name: "Michael De Santa", age: 48, city: "LA", active: true, img: 'https://gtwfilesie-thumb.grandtheftwiki.com/MichaelDeSanta-GTAV.jpg/300px-MichaelDeSanta-GTAV.jpg' },
    { id: 4, name: "Vito Scaletta", age: 26, city: "Empire Bay", active: false, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYBNHPJpNGSIh9jyljnOafkMaPa5xg9gXbQ&s' },
    { id: 5, name: "Tommy Angelo", age: 38, city: "Lost-Heaven", active: true, img: 'https://i.pinimg.com/736x/4c/01/50/4c0150b2e09fc62585e3c4228233a435.jpg' }
  ];

  return (
    <div className="users-list">
      <h1>Карточки пользователей</h1>
      <div className="container">
        {users.map((user) => (
          <Block key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
