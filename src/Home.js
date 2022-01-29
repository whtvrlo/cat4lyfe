import CatList from './CatList';
// import useFetch from './useFetch';
// import faker from 'faker' ;
// import { useState } from 'react';


// need to get handleAddBasket and data from our prop object
const Home = ({ handleAddBasket, data }) => {
    
    // const { data: cats , isPending, error } = useFetch('https://api.thecatapi.com/v1/images/search?limit=20&page=10&order=Desc') //                                     "data:"" meaning grab the data, but call it cats
    // const handleDelete = (id) => {
    //     const newCats = cats.filter(cat => cat.id !== id);
    //     setCats(newCats);
    // }
    // const [catData, setCatData] = useState([])

    // let fakerData = () => {
    //     let data = cats
    //     data.map((cat, index) => {

    //     })
    // }
    function refreshPage() {
        window.location.reload(false);
      }



    return ( 
        <div className="home">

        {/* { error && <div> {error} </div>}
        { isPending && <div>Loading...</div>}  */}

        {/* pass that function (handleAddBasket) to cats list */}
        {/* conditional rendering, if there is data then render CatList */}
        { data && <CatList cats={data} title="All Cats" handleAddBasket={handleAddBasket} />}  
        {/* { cats && <CatList cats={cats} title="All Cats" handleDelete={handleDelete}  />}  */}
        {/* { cats && <CatList cats={cats.filter((cat) => cat.breed === 'Bengal' )} title="By Categories" />} */}
            <div className="buttonMoreCats">
            <button onClick={refreshPage}>more options</button>
            </div>
            <div>
                <p className="warning"> * Please note: due to our broad variety of cats you might not find the same cat again when this buttons is clicked, remember their id number. </p>
                </div>
    
        </div>
        
     );
}
 

export default Home;



// // my code before leon

// import CatList from './CatList';
// import useFetch from './useFetch';
// import faker from 'faker' ;


// const Home = () => {

//     const { data: cats , isPending, error } = useFetch('https://api.thecatapi.com/v1/images/search?limit=20&page=10&order=Desc') //                                     "data:"" meaning grab the data, but call it cats
//     // const handleDelete = (id) => {
//     //     const newCats = cats.filter(cat => cat.id !== id);
//     //     setCats(newCats);
//     // }
//     function refreshPage() {
//         window.location.reload(false);
//       }



//     return ( 
//         <div className="home">
//         { error && <div> {error} </div>}
//         { isPending && <div>Loading...</div>} 
//         { cats && <CatList cats={cats} title="All Cats" />}  
//         {/* { cats && <CatList cats={cats} title="All Cats" handleDelete={handleDelete}  />}  */}
//         {/* { cats && <CatList cats={cats.filter((cat) => cat.breed === 'Bengal' )} title="By Categories" />} */}
//             <div className="buttonMoreCats">
//             <button onClick={refreshPage}>more options</button>
//             </div>
//             <div>
//                 <p className="warning"> * Please note: due to our broad variety of cats you might not find the same cat again when this buttons is clicked, remember their id number. </p>
//                 </div>
    
//         </div>
        
//      );
// }
 

// export default Home;


