import React, { useContext } from 'react';
import { UserAuthDetails } from '../Context/AuthCon';
import { Button } from 'reactstrap';

function Header() {

  const { user, logOut, selectedBook, bookList } = useContext(UserAuthDetails);

  return (
    <div style={{
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
      <p>Liked Book: {bookList.filter((x => x.like)).length } 
      <i className={bookList.filter((x => x.like)).length > 0  ? 'fas fa-heart text-danger' : 'far fa-heart text-muted'} style={{ marginRight: '5px' }} />
     
      </p>
      <h4 className='book-title'>{selectedBook ? `  Hi ${user} your reading now ${selectedBook.title}` : ''}</h4>


      <div>
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
    </div>
  );
}

export default Header;
