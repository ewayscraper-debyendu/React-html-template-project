import React, { useEffect, useState } from 'react';
import axios from "axios";

const Products = () => {

  const [users, setUsers] = useState([]);
  //const [loading, setLoading] = useState(false);

  ////Fetch API start
  // const getUsers = async() =>{
  //   const responce = await fetch('https://api.github.com/users');
  //   console.log(responce);
  //   setUsers(await responce.json());
  //   console.log(users);
  // };

  // useEffect(() =>{
  //   getUsers();
  // }, []);
  ////Fetch API end

  ///axios API start
  useEffect(() => {
    const fetchData = async () =>{
      try {
        const response = await axios.get('https://api.github.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error(error.message);
        //console.log('hi');
      }
      
    }

    fetchData();
  }, []);
  
  ////axios API end
 
  return (
    <>
     {/* products */}
     <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Our Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="our_products">
                <div className="row">
                  {
                users.map((curElem) => {
                  return(
                  <div className="col-md-4 margin_bottom1" key={curElem.id}>
                    <div className="product_box">
                      <figure><img src={curElem.avatar_url} alt="#" /></figure>
                      <h3>{curElem.login}</h3>
                    </div>
                  </div>
                  )
                })
                }
                  {/* <div className="col-md-4 margin_bottom1">
                    <div className="product_box">
                      <figure><img src="images/product2.png" alt="#" /></figure>
                      <h3>Laptop</h3>
                    </div>
                  </div>
                  <div className="col-md-4 margin_bottom1">
                    <div className="product_box">
                      <figure><img src="images/product3.png" alt="#" /></figure>
                      <h3>Tablet</h3>
                    </div>
                  </div>
                  <div className="col-md-4 margin_bottom1">
                    <div className="product_box">
                      <figure><img src="images/product4.png" alt="#" /></figure>
                      <h3>Speakers</h3>
                    </div>
                  </div>
                  <div className="col-md-4 margin_bottom1">
                    <div className="product_box">
                      <figure><img src="images/product5.png" alt="#" /></figure>
                      <h3>internet</h3>
                    </div>
                  </div>
                  <div className="col-md-4 margin_bottom1">
                    <div className="product_box">
                      <figure><img src="images/product6.png" alt="#" /></figure>
                      <h3>Hardisk</h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="product_box">
                      <figure><img src="images/product7.png" alt="#" /></figure>
                      <h3>Rams</h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="product_box">
                      <figure><img src="images/product8.png" alt="#" /></figure>
                      <h3>Bettery</h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="product_box">
                      <figure><img src="images/product9.png" alt="#" /></figure>
                      <h3>Drive</h3>
                    </div>
                  </div> */}
                  <div className="col-md-12">
                    <a className="read_more" href="#">See More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end products */}
    </>
  )
}

export default Products