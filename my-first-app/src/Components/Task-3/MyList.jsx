import React from "react";

export const MyList = () => {
    const carBrands = [
    'Mazda',
    'Toyota',
    'Chevrolet',
    'Nissan',
    'Hyundai',
    'Ferrari',
    'Mercedes',
    'Ford',
    'Romeo',
    'Mac',
    'Lamborghini'

]
    return (
        <>
        <ul>
      {
        carBrands.map((brand, index) => {
          return (
            <li style={{ listStyle: "none", fontWeight: "extra-bold", fontsize: "17px",
            fontStyle: "fantasy", color: "blue"}}
             key={index} >{brand} - Disponible: {brand.length + index }</li>
          )
        })
      }
    </ul>    

        </>
    )
} 
