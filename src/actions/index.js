export function selectBook(book) {

    // selectBook is an ActionCreator, it needs to return an object with a type property (an action)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}