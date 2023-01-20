import { React, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';



// --------------------Old Way Using Class Component---------------------------------------
// class BookList extends Component {
//     static contextType = ThemeContext;
// 
//     render() {
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//             <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
//                 <ul>
//                     <li style={{background: theme.ui}}>The way of Kings</li>
//                     <li style={{background: theme.ui}}>The name of the wind</li>
//                     <li style={{background: theme.ui}}>The final empire</li>
//                 </ul>
//             </div>
//         );
//     }
// }



// ----------------------------- Using Functional Component--------------------------------
const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const {books, setBooks} = useContext(BookContext);

    const theme = isLightTheme ? light : dark;
    return (
        <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                {books.map((book) => {
                    return (<li style={{background: theme.ui}} key={book.id}>{book.title}</li>)
                })}
            </ul>
        </div> 
    );
}

export default BookList;