import { useEffect, useState } from "react";
import { Stock } from "../datos/Stock";
import { Contenedor } from "../contenedor/Contenedor";
import Item from "../item/Item";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const cargarDatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Stock);
      }, 3000);
    });
  };
  useEffect(() => {
    cargarDatos()
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => console.log("fin process"));
  });
  return (
    <Contenedor>
      <h2 className="text-center pt-3">{greeting}</h2>
      <div className="display">
        {productos.map((el) => (
          <Item
            key={el.id}
            nombre={el.nombre}
            precio={el.precio}
            descripcion={el.descripcion}
            img={el.img}
          />
        ))}
      </div>
    </Contenedor>
  );
};

export default ItemListContainer;
