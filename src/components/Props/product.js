
export const Item = ({image, name, price}) => {
    return (
        <div className="col-xs-3 col-sn-3 col-lg-3 doandeptrai">
            <img className="Heloooo" src={image} alt = "" />
            <h5 className="title">San Pham: {name}</h5>
            <h6 className="price">Gias san Pham: {price}</h6>
        </div>
    )
}

export const Box = (props) => {
    return (
        <div style={{backgroundColor: props.color, width: props.width, height: props.height}}>

        </div>
    )
}