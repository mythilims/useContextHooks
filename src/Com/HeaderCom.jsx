import React,{useContext} from 'react';
import { UserAuthDetails } from '../Context/AuthCon';
import { Button } from 'reactstrap';

function Header() {
  
  const {user,logOut,selectedBook} =useContext(UserAuthDetails);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '60px',
      backgroundColor: '#007bff',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      zIndex: 1000
    }}>
      <h4> {user} Dashboard</h4>
      <h4 className='book-title'>{selectedBook? `  Hi ${user} your reading now ${selectedBook.title}`:''}</h4>


      <div>
        {/* Future: You can add Profile/Logout buttons here */}
        <Button 
  color="dark" 
  onClick={logOut}
  style={{
    fontWeight: 'bold',
    padding: '8px 20px',
    borderRadius: '10px'
  }}
>
  Logout
</Button>
      </div>
    </header>
  );
}

export default Header;
