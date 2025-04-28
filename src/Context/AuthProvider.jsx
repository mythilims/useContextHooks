import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuthDetails } from "./AuthCon";
import book from '../Datajson/book.json';

const bookReducer = (state, action) => {
   switch (action.type) {
      case 'like': {
         // Create a copy of the books list and toggle the like status of the selected book
         const updatedBooks = [...state];
         updatedBooks[action.idx].like = true;
         return updatedBooks;
      }
      case 'unlike': {
        // Create a copy of the books list and toggle the like status of the selected book
        const updatedBooks = [...state];
        updatedBooks[action.idx].like = false;
        return updatedBooks;
     }
      default:
         return state;
   }
};

export function AuthProvider({ children }) {
   const [bookList, setBookList] = useReducer(bookReducer, book);
   const navigate = useNavigate();
   const [userName, setUserName] = useState('');
   const [user, setUser] = useState('');
   const [selectedBook, setSelectedBook] = useState(null);
   const [psw, setPsw] = useState('');

   const login = () => {
      localStorage.setItem('userName', userName);
      const user = localStorage.getItem('userName');
      setUser(user);
      navigate('/das');
   };

   useEffect(() => {
      const user = localStorage.getItem('userName');
      setUser(user);
   }, []);

   const logOut = () => {
      localStorage.clear();
      setPsw('');
      setUserName('');
      setUser('');
      setSelectedBook(null);
      navigate('/');
   };

   return (
      <UserAuthDetails.Provider value={{
         userName, setUserName, psw, setPsw, login, user, logOut, selectedBook, setSelectedBook, bookList, setBookList
      }}>
         {children}
      </UserAuthDetails.Provider>
   );
}
