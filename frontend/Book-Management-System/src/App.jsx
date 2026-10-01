import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    bookTitle: "",
    authorName: "",
    isbn: "",
    category: "",
    publicationYear: ""
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/books",
        formData
      );

      console.log(response.data);

      setMessage("Book added successfully!");

      // Clear form
      setFormData({
        bookTitle: "",
        authorName: "",
        isbn: "",
        category: "",
        publicationYear: ""
      });
    } catch (error) {
      console.log(error);

      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Unable to connect to the server");
      }
    }
  };

  return (
    <div className="container">
      <h1>Library Book Management System</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Book Title</label>
          <input
            type="text"
            name="bookTitle"
            value={formData.bookTitle}
            onChange={handleChange}
            placeholder="Enter book title"
            required
          />
        </div>

        <div className="form-group">
          <label>Author Name</label>
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            placeholder="Enter author name"
            required
          />
        </div>

        <div className="form-group">
          <label>ISBN</label>
          <input
            type="text"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            placeholder="Enter ISBN"
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter category"
            required
          />
        </div>

        <div className="form-group">
          <label>Publication Year</label>
          <input
            type="number"
            name="publicationYear"
            value={formData.publicationYear}
            onChange={handleChange}
            placeholder="Enter publication year"
            required
          />
        </div>

        <button type="submit">
          Add Book
        </button>
      </form>

      {message && (
        <p className="message">
          {message}
        </p>
      )}
    </div>
  );
}

export default App;