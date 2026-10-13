import useFetch from "./useFetch";
import "./App.css";

function App() {
  const {
    data: photos,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/photos?_limit=12");

  return (
    <div className="app">
      <h1>Photos</h1>

      {loading && <p className="message">Loading photos...</p>}

      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && photos && (
        <div className="photo-grid">
          {photos.map((photo) => (
            <div className="photo-card" key={photo.id}>
              <img src={photo.url} alt={photo.title} />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;