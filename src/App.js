import './App.css';
import Employee from './components/employee';

function App() {
  console.log('we are about to list the employees');
  const showEmployees = true;
  return (
    <div className="App">
      {console.log('inside the return')}
      {showEmployees ?
        <div>
          <Employee name='Caleb' role='Intern'/>
          <Employee name='Abby' />
          <Employee name='John' />
        </div> 
        
      :
        <p>You cannot see the employees</p>
      }

        
        

    </div>
  );
}

export default App;
