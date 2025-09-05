import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../assets/image/banner1.jpg";
import banner2 from "../../assets/image/banner2.jpg";
import banner3 from "../../assets/image/banner3.jpg";
import "./Home.css";
import ProductCard from "../../common/productCard/productCard";
import Spinner from 'react-bootstrap/Spinner';
// import { Context } from '../../App';
// import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { homeSlice } from '../../redux/homeslice/homeSlice';
import { cartSlice } from '../../redux/cartslice/cartSlice';
import { ValidateDuplicateCartItems } from '../../util/utils';



function Home() {
    // const data: any=useContext(Context);
    // console.log(data);
    // const [loading, setLoading] = useState<boolean>(true);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const redux: any = useSelector((state) => state);

    console.log("redux", redux);

    useEffect(() => {
        getProducts();
    }, []);

    function getProducts() {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((res) => {
                setProducts(res.products);
                dispatch(homeSlice.actions.setLoading(false));
                // setLoading(false);
            });
    }

    return (
        <main>
            {/* <div>{data.homeScreen.name}</div>
            <button onClick={()=>data.homeScreen.setHomeValue({name:"Hello"})}>Update</button> */}
            <section className='home-banner'>
                <Carousel fade>
                    <Carousel.Item interval={1000}>
                        <img className="banner-image" src={banner1} alt='banner'></img>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className="banner-image" src={banner2} alt='banner'></img>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className="banner-image" src={banner3} alt='banner'></img>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section className='product-section'>
                {redux.home.loading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <div className='product-listing'>
                        {products.map((items: any, index: number) => {
                            return (
                                <ProductCard
                                    key={index}
                                    productInfo={items}
                                    onClick={(data: any) => {
                                        let validate = ValidateDuplicateCartItems(
                                            redux.cart.cartItems,
                                            data
                                        );
                                        console.log(redux.cart.cartItems.validate);
                                        if (!validate) {
                                            let cartItem: any = [...redux.cart.cartItems, data];
                                            dispatch(cartSlice.actions.setCart(cartItem));
                                        }
                                        else{
                                            alert("Items already available");
                                        }
                                    }}
                                ></ProductCard>
                                // <Link className="link-tag" to={`/product/${items.id}`}>
                                //     <ProductCard key={index} productInfo={items}></ProductCard>
                                // </Link>

                            );
                        })};
                    </div>

                )}

            </section>
        </main>

    );
}
export default Home;