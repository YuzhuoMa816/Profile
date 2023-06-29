// import logo from './logo.svg';
// import './App.css';


const name = 'Yuzhuo Ma'
const getAge = () =>{
    return 18
}

const songs = [
    {id:1, name:'痴心妄想'},
    {id:2, name:'南山南'},
    {id:3, name:'像我这样的人'},
]
const flag = false

const getHtag = (type)=>{
    if (type===1){
        return <h1>this is h1</h1>
    }
    if(type===2){
        return <h2>this is h2</h2>
    }
    if(type===3){
        return  <h3>this is h3</h3>
    }
}


function App() {
  return (
      <div className="App">
            {name}
            {getAge() }
          <u1>
              {songs.map(song=><li key={song.id}> {song.name} </li>)}
          </u1>
          {flag ? (<div>
                        <span> this is span </span>
                    </div>): null}
      </div>
  )

}

export default App;
