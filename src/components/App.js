import '../styles/App.css'
import Layout from './Layout';
import Home from './pages/Home.js';
import Signup from './pages/Signup.js';
import Login from './pages/Login.js'
import Quiz from './pages/Quiz.js';

function App() {
  return (
   
     <Layout>
          {/* <Home/> */}
      {/* <Signup/> */}
      {/* <Login/> */}
      <Quiz/>
     </Layout>
    
  
  );
}
export default App;
