const Book = ({ book }) => {
  const { name, price } = book;
  return (
    <div
      style={{
        border: "2px solid salmon",
        padding: "20px",
        marginBottom: "10px",
        borderRadius: "10px",
      }}
    >
      <h3>Book Name: {name}</h3>
      <p>Price: {price}</p>
    </div>
  );
};

export default Book;
