import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import WarningSign from './components/WarningSign'
// import MyBadge from './components/MyBadge'
// import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import fantasyBooks from './fantasyBooks.json'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Register from './components/Register'


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <header className="App-header">

          <Switch>
            <Route path="/register" exact component={Register} />
            <Route
              path="/"
              exact
              render={() => (


                <BookList books={fantasyBooks} />

              )}
            />

          </Switch>
          {/* <WarningSign text="Watch out again!" /> */}
          {/* <MyBadge text="NEW!!" color="info" /> */}
          {/* <SingleBook book={fantasyBooks[0]} /> */}
        </header>

      </div>
    </Router>

  )
}

export default App
