import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/mycomponent';
import ListTodo from './Todos/ListTodo';
import ListTodos from './Todos/ListTodo(NDT)';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListUser from './Users/ListUser';
import DetailUser from './Users/Detailusers';

import Nav from './Nav/Nav';
import Home from './example/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
/**
 * 
 * 2. class component / function componennnt (function / arrow func)
 * JSX
 */



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/todo">
              <ListTodo />
            </Route>

            <Route path="/about">
              <MyComponent />
            </Route>

            <Route path="/user" exact>
              <ListUser />
            </Route>

            <Route path="/user/:id">
              <DetailUser />
            </Route>


          </Switch>

          {/* <ListTodo/> */}
          {/* <ListTodos/> */}
          {/* <MyComponent/> */}
        </header>

          <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          
          />
          {/* Same as */}
          <ToastContainer />
      </div>
    </BrowserRouter>

  );
}

export default App;
