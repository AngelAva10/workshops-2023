import React from "react";

export const MyList = () => {
    const carBrands = ['Mazda',
    'Toyota',
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
            <li style={{ listStyle: "none", fontWeight: "normal", fontsize: "15px",
            fontStyle: "italic",}}
             key={index} >{brand} - Available Units:{carBrands.length + index }</li>
          )
        })
      }
    </ul>    

        </>
    )
} 
