import Book from "./Book";

function BookStore({ books }) {
  return (
    <div>
      <h3 style={{ textAlign: "right", marginRight: "10px" }}>
        Total Books: {books.length}
      </h3>
      {books.map((book) => (
        <Book book={book} />
      ))}
    </div>
  );
}

export default BookStore;
