import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter,Routes,Route } from 'react-router-dom';
import Nav from './components/home';
import AddMovie from './components/moviecomponents/addmovie';
import MovieList from './components/moviecomponents/movielist';
import Editmovie from './components/moviecomponents/editmovie';
import UserList from './components/usercomponents/userlist';
import SignUp from './components/userend/home/register';
import SignIn from './components/userend/home/login';
import BookTickets from './components/bookingcomponents/booktickets';
import AddTheater from './components/theatercomponents/addtheater';
import Theaterlist from './components/theatercomponents/theaterlist';
import EditTheater from './components/theatercomponents/edittheater';

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" />
          <Route path="/movies" />
          <Route path="/users" element={<UserList />} />
          <Route path="/add-movie-form" element={<AddMovie />} />
          <Route path="/view-movie-list" element={<MovieList />} />
          <Route path="/edit-movie/:id" element={<Editmovie />} />
          <Route path="/register" element={<SignUp />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/book-seats" element={<BookTickets />} />
          <Route path="/add-theater-form" element={<AddTheater />} />
          <Route path="/view-theater-list" element={<Theaterlist />} />
          <Route path='/edit-theater/:id' element={<EditTheater />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;
