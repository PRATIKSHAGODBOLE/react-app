
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import PostApp from './Components/PostApp';
import UseEffect from './Components/UseEffect';
// import StateHook from './Assigments/StateHook'
// import Todo from './Assigments/Todo'


function App() {
  return (
   <div className='container'>
    {/* <StateHook /><br></br>
  <Todo /> */}
  
  <UseEffect header="TextAnalyar"/><br></br><br></br>
  <PostApp/>


</div>
  );
}

export default App;
