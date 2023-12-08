import { useContext } from "react";
import { BooksContext } from "./BooksContext";

export default function Book({book}) {
 //kiekviena knyga perduodam per propsa ^book yra objektas, ji dekonstruktinam i atskiras dalis
 //ir viska atspausdina. Taip atrodo vienos knygos atvaizdavimas. Visoms reikia Books komponente susimapinti 
    const {title, author, type, price, img } = book; 
    const {types} = useContext(BooksContext)
 //
    return (
        <div className="book">
            <div className="book__image">
                <img src={img} alt={title} />
            </div>
            <div className="book__title">{title}</div>
            <div className="book__author">{author}</div>
            <div className="book__type">{types !== null ? types.find(t=> t.id === book.type).title : ""}</div> 
            <div className="book__price">{price} EUR</div>
        </div>
    );
}
//<!-- jeigu tipai nera nullas, jie jau gauti, tuomet paisome. Tipuose faindinam, jeigu id lygud tipui, tuomet imam titla, jei ne, nieko nerodom