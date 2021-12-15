// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default function App(){
  const movies=[
    {
      name:"Spiderman No Way Home",
      poster:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg",
      rating:"7.8",
      summary:"With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
    },
    {
      name:"Eternals",
      poster:"https://wdwnt.com/wp-content/uploads/2021/02/Eternals-calendar-art-8557558-1200x1200.jpeg",
      rating:"6.8",
      summary:"The Eternals, a race of immortal beings with superhuman powers who have secretly lived on Earth for thousands of years, reunite to battle the evil Deviants."
    },
    {
      name:"Shang-Chi",
      poster:"https://www.themoviedb.org/t/p/original/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
      rating:"8.8",
      summary:"Martial-arts master Shang-Chi confronts the past he thought he left behind when he's drawn into the web of the mysterious Ten Rings organization."
    },
    {
      name:"Black Widow",
      poster:"https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      rating:"6.7",
      summary:"Natasha Romanoff, a former KGB spy, is shocked to find out that her ex handler, General Dreykov, is still alive. While evading capture by Taskmaster, she is forced to confront her dark past."
    },
    {
      name:"Spiderman Far Away From Home",
      poster:"https://m.media-amazon.com/images/I/9113Gh15i2L._SL1500_.jpg",
      rating:"8.6",
      summary:"Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins."
    },
    {
      name:"Avengers Endgame",
      poster:"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
      rating:"9.2",
      summary:"After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."
    }
  ];
return(
  <div className="App">
    <h1>Marvel Cinematic Universe</h1>
    <div className="list">
  {movies.map(({name,poster,rating,summary})=>
    <Movie name={name} poster={poster} rating={rating} summary={summary}/>
      )}
  </div>
  </div>
);
}
function Movie({name,poster,rating,summary}){
  const check=(rating>=8.5)?"green" : "red";
  const style=(check==="green")?{background:"green",color:"white"} :{background:"red",color:"white"};
  return(
    <div className="movie-container">
      <img src={poster} 
      alt="" 
      className="movie-poster" />

      <div className="movie-specs">
      <h3 className="movie-name">{name}</h3>
      <p className="movie-rating">Rating-<span style={style}>{rating}</span></p>
      </div>
      <p className="movie-summary">{summary}</p>
    </div>
  )
}
