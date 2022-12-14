import React from 'react';
import User from './components/User';
import Tea from './components/Tea'


function App() {

  let userList = [];
  const [teaList, setTeaList] = React.useState([{}, {}]);
  
  function createUser(username,accountCreatedTime, favoriteTeas) {  
    
    let user = {
        name: username,
        accountCreatedTime: accountCreatedTime,
        favoriteTeas: favoriteTeas
      }

      userList.push(user);
      return user;
  }

  function addNewTea() {
    setTeaList([...teaList, {
      name: document.getElementById("teaname").value,
    type: document.getElementById("teatype").value,
    brand: document.getElementById("brand").value,
    rating: document.getElementById("rating").value,
    notes: document.getElementById("notes").value
  }]);
  }

  const teaArray = teaList.map(tea => {
    return (
    <Tea teaname = {tea.name} type = {tea.type} brand = {tea.brand} rating = {tea.rating} notes = {tea.notes}/>
    )}
  )

  return (
    <div className="App">
      <form className="userform" id="newuserform">
        <h2>New user signup</h2>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Username"></input>
        <label htmlFor="favoritetea">Favorite Type of Tea</label>
        <select id="favoritetea" name="favoritetea">
          <option value="Green">Green</option>
          <option value="Green">Black</option>
          <option value="Green">Oolong</option>
          <option value="Green">Herbal</option>
          <option value="Green">White</option>
        </select>
      </form>
      <button onClick={() => createUser(document.getElementById("username").value, new Date(), document.getElementById("favoritetea").value)} type="click">Submit</button>
      <form className="teaform" id="newteaform">
        <h2>Add Tea</h2>
        <label htmlFor="teaname">Tea Name</label>
        <input type="text" id="teaname" name="teaname" placeholder="Tea name"></input>
        <label htmlFor="teatype">Type of Tea</label>
        <select id="teatype" name="teatype">
          <option value="Green">Green</option>
          <option value="Green">Black</option>
          <option value="Green">Oolong</option>
          <option value="Green">Herbal</option>
          <option value="Green">White</option>
        </select>
        <label htmlFor="brand">Tea Brand</label>
        <input type="text" id="brand" name="brand"></input>
        <label htmlFor="rating">Tea Rating</label>
        <input type="text" id="rating" name="rating"></input>
        <label htmlFor="Notes">Notes on Tea</label>
        <input type="text" id="notes" name="notes"></input>
      </form>
      <button onClick={() => addNewTea()} type="click">Submit</button>


      <Tea teaname="Cuppa Cake" type="herbal" brand="unknown" rating="8" notes="This is a tasty tea!"/>
      {teaArray}
    </div>
  );
}

export default App;