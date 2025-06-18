import {useState} from'react';
const firstquote ={
  id:1,
  author:"John Doe",
  quote:"This is the queue"
}
// it is a function that return a jsx element

function Appquote(){
  const [quotes,setQuotes]=useState([]);
  return(
    <div>
      <h1>quotes</h1>
      <form
       onSubmit={(event)=>{
        event.preventDefault();
        const formData=new FormData(event.target);
        const quote={
          id:quotes.length+1,
          quote:formData.get('text'),
        };
        setQuotes([...quotes,quote]);

       }}>
        <input name="text" placeholder="Add a quote"></input>
        <button>Add quote</button>
      
        </form>


      {quotes.map((quote)=>{
        return(
          <div key={quotes.id}>
            <h2>{quote.quote}</h2>
            </div>

        );
      })}
    </div>
  ); 
}
export default Appquote;




// import { useState } from 'react';

// function Appquote() {
//   const [activeTab, setActiveTab] = useState(0); // 0: Add Quote, 1: Favorite Quotes
//   const [quotes, setQuotes] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   function handleAddQuote(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const quote = {
//       id: quotes.length + 1,
//       quote: formData.get('text'),
//     };
//     setQuotes([...quotes, quote]);
//     event.target.reset(); // clear input
//   }

//   function handleFavorite(quote) {
//     setFavorites([...favorites, quote]);
//   }

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Quotes App</h1>

//       {/* Tab Buttons */}
//       <div style={{ marginBottom: '10px' }}>
//         <button onClick={() => setActiveTab(0)} style={{ marginRight: '10px', backgroundColor: activeTab === 0 ? 'lightblue' : 'white' }}>
//           Add Quote
//         </button>
//         <button onClick={() => setActiveTab(1)} style={{ backgroundColor: activeTab === 1 ? 'lightblue' : 'white' }}>
//           Favorite Quotes
//         </button>
//       </div>

//       {/* Tab Content */}
//       {activeTab === 0 && (
//         <div>
//           <form onSubmit={handleAddQuote}>
//             <input name="text" placeholder="Add a quote" required />
//             <button type="submit">Add Quote</button>
//           </form>

//           {/* List of Quotes */}
//           {quotes.map((quote) => (
//             <div key={quote.id} style={{ marginTop: '10px' }}>
//               <h2>{quote.quote}</h2>
//               <button onClick={() => handleFavorite(quote)}>Add to Favorites</button>
//             </div>
//           ))}
//         </div>
//       )}

//       {activeTab === 1 && (
//         <div>
//           {favorites.length === 0 ? (
//             <p>No favorite quotes yet.</p>
//           ) : (
//             favorites.map((quote) => (
//               <div key={quote.id} style={{ marginTop: '10px' }}>
//                 <h2>{quote.quote}</h2>
//               </div>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Appquote;

