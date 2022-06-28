import { useState, useEffect, useCallback } from 'react';
import './App.css';
import Button from './Button';
import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

 const fetchMoviesHandler = useCallback ( async () => {
    setIsLoading(true)
    setError(null)
    try{
      const response = await fetch("https://api-working-a03d4-default-rtdb.firebaseio.com/movies.json")
      if(!response.ok){
        throw new Error('Something went wrong')
      }
      const data = await response.json()
       const loadedMovies = []
      for(const key in data){
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }
      setMovies(loadedMovies)
    }
    catch(error){
      setError(error.message)
    }
    setIsLoading(false)
 },[])




// method number TWO
// method number TWO

  // function fetchMoviesHandler (){
  //   fetch("https://swapi.dev/api/films").then((response)=>{
  //     // console.log(response.json())
  //       return response.json()
  //   }).then(data=>{
  //       const transformMovies = data.results.map(i=>{
  //         return{
  //           id: i.episode_id, 
  //           title: i.title, 
  //           openingText: i.opening_crawl, 
  //           releaseDate: i.release_date, 
  //         }
  //       })
  //       setMovies(transformMovies)
  //   })
  // }

// method number TWO ended
// method number TWO ended
    const addMovieHandler = useCallback(async (movie) =>{
      console.log(' yahoo props received !!')
      console.log(movie)
      const response2 = await fetch('https://api-working-a03d4-default-rtdb.firebaseio.com/movies.json',{
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        const data = await response2.json()
        console.log(data)
        fetchMoviesHandler()
    }
    ,[fetchMoviesHandler])

    useEffect(()=>{
      fetchMoviesHandler()
    },[fetchMoviesHandler])
    

    let content = <p>No movies found yet</p>

    if (movies.length>0){
      content = <MoviesList movies = {movies}/>
    }
    if (error){
      content = <p className='text-white'>{error}</p>
    }
    if(isLoading){
      content = <p className='text-white'>Loading...</p>
    }


  return (
    <>
      <section className='bg-slate-900 flex items-center justify-center mt-10 rounded-xl m-auto w-9/12 h-auto px-12  py-8'>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
      <section className='bg-slate-900 flex items-center justify-center mt-10 rounded-xl m-auto w-9/12 h-32'>
        <Button handler={fetchMoviesHandler} text="Fetch Movies"/>
        {/* <button className='bg-white' onClick={fetchMoviesHandler}> Fetch Movies</button> */}
      </section>
      <section className='flex items-center justify-center m-auto mt-10 mb-10 rounded-xl font-[montserrat] text-white w-9/12 h-auto bg-slate-900 '>
        {content}
      </section>
    </>
  );
}

export default App;
