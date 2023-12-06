import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BooksContext = createContext();

const booksUrl = "https://in3.dev/knygos/";
const typesUrl = "https://in3.dev/knygos/types/";

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(null);

  useEffect((_) => {
    axios.get(booksUrl)
    .then((res) => {
      //kreipimasis i uzduota url
      setBooks(res.data); //gaunam rezultata ir ta rezultata pasetinam i useState=> [books, setBooks]
      console.log(res.data); // res.data yra visi booksai, ateinantys is serverio, masyavas su knygom
    });
  }, []);

  console.log(children);
  
  return (
    <BooksContext.Provider
      value={{
        books, //is pradziu books buna null, atiduodamas cia, i Provideri ir jis nusiuncia i Layouta.Ten booksai lygu null ir rodo Loading...
        //tada ateina atsakymas is serverio, pasetinam masyva i booksus, provideris atiduota i Layouta, booksai jau !==0, spausdina Books komponenta.
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
