export default function Book({book}) {
 //kiekviena knyga perduodam per propsa ^book yra objektas, ji dekonstruktinam i atskiras dalis
 //ir viska atspausdina. Taip atrodo vienos knygos atvaizdavimas. Visoms reikia Books komponente susimapinti 
    const { id, title, author, type, price, img } = book; 
 //
    return (
        <div className="book">
            <div className="book__image">
                <img src={img} alt={title} />
            </div>
            <div className="book__title">{title}</div>
            <div className="book__author">{author}</div>
            <div className="book__type">{type}</div>
            <div className="book__price">{price}</div>
        </div>
    );
}