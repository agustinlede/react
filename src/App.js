import './index.css';
import Employee from './components/employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  const [employees, setEmployees] = useState(
    [
      {
        
        name: "Caleb", 
        role:"Developer", 
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "Sal", 
        role:"Manager", 
        img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "John", 
        role:"Director of Eng.", 
        img: "https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "Melanie", 
        role:"Software Engineer", 
        img: "https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "Corey", 
        role:"The Devops Guy", 
        img: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "Jake", 
        role:"Senior", 
        img: "https://images.pexels.com/photos/2530775/pexels-photo-2530775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
    ]
  );
  return (
    <div className="App">
      {showEmployees ?
        <>
          <input type='text' onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }}></input>
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img}
                  />);
            })}
          </div>
        </> 
        
      :
        <p>You cannot see the employees</p>
      }

        
        

    </div>
  );
}

export default App;
