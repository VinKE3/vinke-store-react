import NavBarR from "./components/navbar/NavBarR";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
function App() {
  return (
    <div className="nave">
      <NavBarR />
      <ItemListContainer greeting="Bienvenidos a VinKe-Store donde encontraras las mejores guitarras" />
    </div>
  );
}

export default App;
