import { useContext } from "react";
import { BooksContext } from "./BooksContext";
import Book from "./Book";

export default function Books() {
  const { books } = useContext(BooksContext);
  return <div className="books">

{
    books.map(book => book.show? <Book key={book.id} book={book}/>: null)
}


  </div>;
}
//kai knygas gaunam, atsidaro Book komponentas --> .(kitas failas).. kiekviena knyga kad gautume turim susimapinti Book komponenta. Uzdedam key
// ir perduodam book'sa zemyn