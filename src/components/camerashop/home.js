import Header from './header';
import Footer from './footer';
import Nab from './nab';
import Product from './product';
import { getData } from './data';
const CameraShop  = () =>{
    const data = getData()
    console.log("asds",data)
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
                {
                    data.map(product => {
                        return (<Product 
                            key={product.id}  
                            title={product.title}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                        />)
                    })
                }
    
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