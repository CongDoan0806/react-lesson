import React, { Component, useState } from 'react';

// export function Dientich() {
//     const [length, setLength] = useState(0);
//     const [width, setWidth] = useState(0);
//     const [area, setArea] = useState(0);

//     const calculateArea = () => {
//         setArea(length * width);
//     };

//     return (
//         <div style={{ padding: '20px' }}>
//             <h2>Tính diện tích hình chữ nhật</h2>

//             <div>
//                 <label>Chiều dài: </label>
//                 <input
//                     type="number"
//                     value={length}
//                     onChange={(e) => setLength(Number(e.target.value))}
//                 />
//             </div>

//             <div>
//                 <label>Chiều rộng: </label>
//                 <input
//                     type="number"
//                     value={width}
//                     onChange={(e) => setWidth(Number(e.target.value))}
//                 />
//             </div>

//             <div>
//                 <button onClick={calculateArea}>Tính diện tích</button>
//             </div>

//             <h3>Diện tích: {area}</h3>
//         </div>
//     );
// }
export function getData(){
    return [
        {
            name: 'a',
        },
        {
            name: 'b'
        },
        {
            name: 'c'
        }
    ]
}

// export class Statel extends Component{
//     constructor(props) {
//         var arr = getData()
//         super(props);

//         this.state = { arr }
//     }

//     render(){
//         return (
//             <div>

//                 {this.state.arr.map((item, index) => (
//                     <h1 key={index}>{item.name}</h1>
//                 ))}
//             </div>
//         )
//     }
// }

export const Statel = () => {
    const data = getData()
    const [state, setState] = useState(data)

    return(
        <div>

            {data.map((item, index) => (
                <h1 key={index}>{item.name}</h1>
                 ))}
            </div>
    )
}
