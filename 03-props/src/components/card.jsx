import React from 'react'

const card = (props) => {
    console.log(props);
  return (
   <div className="card">
        <img src="https://imgs.search.brave.com/3_eo-n9l1P9c_CZQDBE-DfXG34maoM9D0u7R6AKTzJM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ5/NTg4ODk3Mi9waG90/by9sb25kb24tZW5n/bGFuZC12aXJhdC1r/b2hsaS1vZi1pbmRp/YS1wb3Nlcy1mb3It/YS1wb3J0cmFpdC1w/cmlvci10by10aGUt/aWNjLXdvcmxkLXRl/c3QuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPV9ZY0hCVWQx/amZWU2ZRWXFKRW5t/NnFPYWdQcUd0RE5t/SmFZVzFjakMtb0E9" alt="" />
        <h1>{props.user}</h1>
        <p> King Of Cricket  </p>
        <button>Chek It Once </button>
      </div>
  )
}

export default card
