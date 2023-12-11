import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BooksContext = createContext();

const booksUrl = "https://in3.dev/knygos/";
const typesUrl = "https://in3.dev/knygos/types/";

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(null);
  const [types, setTypes] = useState(null);

  useEffect((_) => {
    axios
      .get(booksUrl) //kreipimasis i uzduota url
      .then((res) => {
        setBooks(res.data.map(b=>({...b, show:true}))); //gaunam rezultata ir ta rezultata pasetinam i useState=> [books, setBooks]
        console.log(res.data); // res.data yra visi booksai, ateinantys is serverio, masyavas su knygom
      });
  }, []);

  console.log("booksProvider Children:", children);

  useEffect((_) => { // sortui padaryti
    axios
      .get(typesUrl) //kreipimasis i uzduota url
      .then(res => {
        setTypes(res.data); //gaunam rezultata ir ta rezultata pasetinam i useState=> [books, setBooks]
        console.log(res.data); // res.data yra visi booksai, ateinantys is serverio, masyavas su knygom
      });
  }, []);

  return (
    <BooksContext.Provider
      value={{
        books: books,
        types: types,
        setBooks,
        setTypes, //is pradziu books buna null, atiduodamas cia, i Provideri ir jis nusiuncia i Layouta.Ten booksai lygu null ir rodo Loading...
        //tada ateina atsakymas is serverio, pasetinam masyva i booksus, provideris atiduota i Layouta, booksai jau !==0, spausdina Books komponenta.
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
