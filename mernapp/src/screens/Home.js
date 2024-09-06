import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


export default function Home() {

  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {

    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",

      });

      response = await response.json();
      console.log(response)
      // setFoodItem(response[0]);
      // setFoodCat(response[1]);
      setFoodItem(response.foodItems);
      setFoodCat(response.foodCategory);




    } catch (error) {

    }



  }

  useEffect(() => {
    loadData()
  }, [])

  console.log(foodCat)
  return (
    <div>
      <div> <Navbar /></div>
      <div>

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
          <div className="carousel-inner" id='carousel'>
            <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}> <div className="d-flex justify-content-center">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />

              {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}

            </div>
            </div>
            <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ filter: "brightmess(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://plus.unsplash.com/premium_photo-1668095398227-c943ddb69d89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ filter: "brightmess(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ filter: "brightmess(30%)" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>

      <div className='container' >

        {
          foodCat.length > 0 ? (
            foodCat.map((data) => {
              return (
                <div className='row mb-3' key={data._id}>
                  <div className='fs-3 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr />
                  {
                    foodItem.length > 0 ? (
                      foodItem
                        .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                        .map(filterItems => {
                          return (
                            <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                              <Card
                                foodName={filterItems.name}
                                options={filterItems.options[0]}
                                imgSrc={filterItems.img}
                              />
                            </div>
                          );
                        })
                    ) : (
                      <div> No such Data Found</div>
                    )
                  }
                </div>
              );
            })
          ) : (
            <div> No Categories Found</div>
          )
        }

      </div>
      <div> <Footer /> </div>
    </div>
  )
}

