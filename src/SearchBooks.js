import React from "../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react"
import * as BooksAPI from './BooksAPI'


class SearchBooks extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            books:[],
            query:''
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
        this.changeQuery = this.changeQuery.bind(this)
    }

    changeHandler(event){
        this.setState({[event.target.name]: event.target.value})
    }


    clickHandler(event){
       this.changeQuery(this.state.query)
    }

    changeQuery = ((query) => {
        BooksAPI.search(query, 100).then((books) => {
            if(!books || books.hasOwnProperty('error')) {
                this.setState({books:[""]});
            } else {
                this.setState({books: books});
            }
        });
    });

    render(){
        const { query, books } = this.state

        return(
            <div>
                <input
                    name="query"
                    type="text"
                    onChange={this.changeHandler}
                    placeholder="Search by title or author"
                    value={query}/>
                <button onClick={this.clickHandler}>Search</button>

                <div>
                    <ol>
                      {books.map((book) => (
                        <li>
                          <div>
                          <p>{book.bookID}</p>
                          <p>{book.title}</p>
                          <p>{book.publishDate}</p>
                          
                          </div>
                        </li>
                      ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks;