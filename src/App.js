
import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
     <Nav/>
     <Banner/>
      <Row 
         title="NETFLIX ORIGINALS" 
         fetchUrl={request.fetchNetflixOriginals} 
         isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchTopActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchTopComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchTopHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchTopRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchTopDocumentaries} />
    </div>
  );
}

export default App;
