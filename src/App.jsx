import "./App.css";
import TarjetaVehiculo from "./components/TarjetaVehiculo.jsx";

function App() {
 let autos = [
    {
      marca: "Toyota",
      modelo: "Corolla",
      año: 2020,
      precio: 20000,
    },
    {
      marca: "Honda",
      modelo: "Civic",
      año: 2019,
      precio: 18000,
    },
    {
      marca: "Ford",
      modelo: "Mustang",
      año: 2021,
      precio: 30000,
   },
    {marca: "Chevrolet",
      modelo: "Camaro",
      año: 2022,
      precio: 35000,
   },
    {marca: "Nissan",
      modelo: "Altima",
      año: 2020,
      precio: 22000,
   },
    {marca: "BMW",
      modelo: "3 Series",
      año: 2021,
      precio: 40000,
   },
    {marca: "Mercedes-Benz",
      modelo: "C-Class",
      año: 2022,
      precio: 45000,
   },
  
 ]
   

  return (
    <>
      <h1>Bienvenido a mi tienda</h1>
      {autos.map((auto) => (
        <TarjetaVehiculo
          
          marca={auto.marca} modelo={auto.modelo} año={auto.año}precio={auto.precio}
        />
      ))}
    </>
  );
}

export default App;
