import StarRating from "./StarRating"

function App() {
  return (
    <>
    <StarRating maxRating={5} message={['Terrible','Bad','Okay','Good','Amazing']}/>
    <StarRating maxRating={5} color='#f91111' size={20}/>
    </>
  );
}

export default App;
