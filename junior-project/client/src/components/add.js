import React, { useState } from 'react';


function AddCar({ handelAddCar }) {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');


    return (
        <div className="add-car-form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="brand" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} required />
                <input type="text" name="model" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} required />
                <input type="number" name="year" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required />
                <input type="number" name="price" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <input type="text" name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
                <button type="submit" onClick={() => { handelAddCar(brand, model, year, price, description, image) }}>Add Car</button>
            </form>
        </div>
    );
}

export default AddCar;

// import React, { useState } from 'react'


// function AddCar ({handelAddCar}) {
//   const [brand, setBrand] = useState("");
//   const [model, setModel] = useState("");
//   const [year, setYear] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//     const [image, setImage] = useState("");


//   return (
//     <div>
//       <form>
//         <label htmlFor="brand" >brand</label>
//         <input type="text" onChange={(e)=>{setBrand(e.target.value)}} />
//         <label htmlFor="model" >model</label>
//         <input type="text"onChange={(e)=>{setModel(e.target.value)}} />
//         <label htmlFor="year" onChange={(e)=>{setYear(e.target.value)}}>year</label>
//         <input type="text" onChange={(e)=>{setPrice(e.target.value)}}/>
//         <label htmlFor="imageUrl" >imageUrl</label>
//         <input type="text" onChange={(e)=>{setImage(e.target.value)}}/>
//         <label htmlFor="description" >description</label>
//         <input type="text" onChange={(e)=>{setDescription(e.target.value)}}/>
//         <button onClick={()=>{handelAddCar({brand:brand,model:model,year:year,price:price,description:description,image:image})}}>Add</button>

//       </form>
//     </div>
//   )
// }

// export default AddCar