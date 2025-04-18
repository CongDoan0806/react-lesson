import { getData } from "../camerashop/data"
export function ShowApi({name, image, des}){
    return (
        
        <div>
            <img src = {image}/>
            <div>{name}</div>
            <div>{des}</div>
        </div>
    )
}