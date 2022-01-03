import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Basket from './Basket';
import { useState } from 'react'
import Basket from './Basket'
import CatDetails from './CatDetails'


const App = () => {
  const [basket, setBasket] = useState([])

  const handleAddBasket = (cat) => {
    setBasket([...basket, cat])


  }
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <h1>Find the cat for you</h1>
        <h2 id="subtitle"> Cats from all over the world!</h2>
        <div className="content" >
            <Switch>
              <Route exact path="/">
                <Home handleAddBasket={handleAddBasket}/>
              </Route>
              <Route path="/basket">
                <Basket data={basket} />

              </Route>
              <Route path="/cats/:id">
                <CatDetails />

              </Route>
            </Switch>
    
        </div>
      </div>
    </Router>
  )
}

// const BasketPage = ({data}) => { 
//   return (
//     <div>
//       <h1> Basket items: </h1>
//       {data.map((cat, id) =>{
//         return (
//           <p>Id: {cat.id}</p>
//         )
//       })}
//     </div>
//   )

// }

export default App;




// import { useState, useEffect } from "react"
// import Navbar from './Navbar'
// import Home from './Home'


// const App = () => {
//   const [data, setData] = useState({})


//   useEffect(()=> {
//     handleFetch()
//   }, [])

//   useEffect(() => {
//     console.log("the data has changed")
//   }, [data])

//   const handleFetch = async () => {
//     const response = await fetch (`https://api.thecatapi.com/v1/images/search?limit=9&page=9&order=Desc`)
//     const responseData = await response.json()
//     setData(responseData)
//   }


//   return (
//     <div className="App">
//       <Navbar/>
//       <h1>Find the cat for you</h1>
//       <Home className="content"/>
//       <div >
//         <ol>
//          {data.results &&
//             data.results.map((item, index) => {
//              return (
//                <li key={index}>
//                   <img className="photos" src={`https://api.thecatapi.com/v1/images/search?limit=9&page=9&order=Desc`} alt="" />
                 
//                 </li>
//               )
//             })}
//         </ol>
//         </div>
//     </div>
//   )
// }



// export default App;
