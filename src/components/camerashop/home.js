import Header from './header';
import Footer from './footer';
import Nab from './nab';
import Product from './product';

const CameraShop  = () =>{
    return (

        <div id="container">
        <Header />
        {/* this is content area */}
        <div id="content">
        {/* this is the content for menu */}
        <Nab />
        {/* this is a content for item  */}
        <div id="right-content">
            <h2>Product : </h2>
            <div id="products">
                {Array.from({ length: 6 }).map((_, index) => (
                    <Product key={index}  />
                ))}
    
            <div style={{clear: 'both'}} />
            </div>
            <div style={{clear: 'both'}} />
        </div>
        <div style={{clear: 'both'}} />
        </div>
        {/* footer content */}
        <Footer />
    </div>
    )
}

export default CameraShop;