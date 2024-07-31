import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/mycomponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/**
 * 
 * 2. class component / function componennnt (function / arrow func)
 * JSX
 */



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Simple TODO Apps with Reactjs.
        </p>
        <ListTodo/>
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

  );
}

export default App;
