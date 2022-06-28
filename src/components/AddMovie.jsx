import React, { useRef } from 'react';
import Button from '../Button';

function AddMovie(props) {
  const titleRef = useRef('')
  const openingTextRef = useRef('')
  const releaseDateRef = useRef('')

    const submitHandler= (event)=>{
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };
    console.log("props sent")
    console.log(movie)
    props.onAddMovie(movie);

    event.target.reset()
    

    }
  return (
    <form onSubmit={submitHandler} className='grid w-screen font-[poppins] space-y-4'>
      <div className='flex flex-col space-y-1'>
        <label className='text-white' htmlFor="title">Title</label>
        <input className='rounded-md p-2 placeholder:text-xs' placeholder='Enter Movie Title' type="text" name="" id="" ref={titleRef}/>
      </div>
      <div className='flex flex-col space-y-1'>
        <label className='text-white' htmlFor="title">Opening Text</label>
        <textarea className='rounded-md p-2 placeholder:text-xs' placeholder='Enter Movie Intro' type="text" name="" id="" ref={openingTextRef}></textarea>
      </div>
      <div className='flex flex-col space-y-1'>
        <label className='text-white' htmlFor="title">Release Date</label>
        <input className='rounded-md p-2 placeholder:text-xs' placeholder='Enter Movie Title' type="date" name="" id=""  ref={releaseDateRef}/>
      </div>
      <div className='flex items-center justify-center'>
        <Button text = 'Add Movie'></Button>
      </div>
    </form>
  )
}

export default AddMovie
