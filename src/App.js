import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Basket from './Basket';
import { useState } from 'react'
import Basket from './Basket'
import CatDetails from './CatDetails'
import { collectData } from './collectData'
import faker from 'faker'
import { useEffect } from 'react/cjs/react.development'

const App = () => {
  const [basket, setBasket] = useState([])

  // storing the data here so i can pass to all my other components
  const [data, setData] = useState([])

  //this is basically what you had, the only thing i did was return that array that has been updated
const fakeDataHandler = (fakeData) => {
    fakeData.map((cat) => {
        cat["name"] = faker.name.firstName()
        cat["price"] = faker.commerce.price()
        cat["location"] = faker.address.cityName()
    })
    return fakeData
  }
  // awaiting for javascript to finish these tasks first before moving on
  const collect = async () => {
    try {
      let newData = await collectData()
      let updatedData = await fakeDataHandler(newData)
      setData(updatedData)
    } catch (error){
      console.log(error.message)
    }
  }

  // pass your basket value through props
  // if you want to delete you will have to send the setBasket function though
  const handleAddBasket = (cat) => {
    // first need to duplicated the array with the spread operator (...)
    let newBasket = [...basket]
    // add that new item (cat) to the new array
    newBasket.push(cat)
    // then we can update our state value with the function from our hook
    setBasket(newBasket)
  }

  const handleDeleteBasket = (index) => {
    let newBasket = [...basket]
    newBasket.splice(index, 1)
    setBasket(newBasket)



  }

  useEffect(() => {
    collect()
  },[])

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <h1>Find the cat for you</h1>
        <h2 id="subtitle"> Cats from all over the world!</h2>
        <div className="content" >
            <Switch>
              <Route exact path="/cats4lyfe">

                {/* passing that as a prop...mint */}
                <Home data={data} handleAddBasket={handleAddBasket}/>

              </Route>
              <Route path="/basket">
                <Basket 
                  basket={basket} handleDeleteBasket={handleDeleteBasket}
                />

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






// import Navbar from './Navbar'
// import Home from './Home'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { useState } from 'react'
// import Basket from './Basket'
// import CatDetails from './CatDetails'
// import { collectData } from './collectData'
// import faker from 'faker'
// import { useEffect } from 'react/cjs/react.development'

// const App = () => {
//   const [basket, setBasket] = useState([])

//   // storing the data here so i can pass to all my other components
//   const [data, setData] = useState([])

//   //this is basically what you had, the only thing i did was return that array that has been updated
// const fakeDataHandler = (fakeData) => {
//     fakeData.map((cat) => {
//         cat["name"] = faker.name.firstName()
//         cat["price"] = faker.commerce.price()
//         cat["location"] = faker.address.cityName()
//     })
//     return fakeData
//   }
//   // awaiting for javascript to finish these tasks first before moving on
//   const collect = async () => {
//     try {
//       let newData = await collectData()
//       let updatedData = await fakeDataHandler(newData)
//       setData(updatedData)
//     } catch (error){
//       console.log(error.message)
//     }
//   }

//   // this is working now, you just need to pass your basket value through props
//   // if you want to delete you will have to send the setBasket function though right?
//   const handleAddBasket = (cat) => {
//     // first need to duplicated the array with the spread operator (...)
//     let newBasket = [...basket]
//     // add that new item (cat) to the new array
//     newBasket.push(cat)
//     // then we can update our state value with the function from our hook
//     setBasket(newBasket)
//   }

//   useEffect(() => {
//     collect()
//   },[])

//   return (
//     <Router>
//       <div className="App">
//         <Navbar/>
//         <h1>Find the cat for you</h1>
//         <h2 id="subtitle"> Cats from all over the world!</h2>
//         <div className="content" >
//             <Switch>
//               <Route exact path="/cats4lyfe">

//                 {/* passing that as a prop...mint */}
//                 <Home data={data} handleAddBasket={handleAddBasket}/>

//               </Route>
//               <Route path="/basket">
//                 <Basket basket={basket} />

//               </Route>
//               <Route path="/cats/:id">
//                 <CatDetails />

//               </Route>
//             </Switch>
    
//         </div>
//       </div>
//     </Router>
//   )
// }



// export default App;
