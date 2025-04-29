import { useState } from "react"

export const CountPoint = () => {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState(0)
    const [rank, setRank] = useState('')
      const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}))
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            const eva = (Number(inputs.toan) + Number(inputs.ly)) / 2;
            setResult(eva)
            if(eva >= 9){
                setRank('Xuat Sac')
            }else if(eva >= 8){
                setRank('Gioi')
            }else if(eva >= 7){
                setRank('Kha')
            }else if(eva >= 5){
                setRank('TB')
            }else{
                setRank('Phe vat')
            }
        }
    return (
        <div>
            <h1>Diem: {result}</h1>
            <h1>Xep loai: {rank}</h1>
            <form onSubmit={handleSubmit}>
                <label>Toan: </label>
                <input 
                    type="number" 
                    name="toan" 
                    value={inputs.toan || ""} 
                    onChange={handleChange}
                    />
                <label>Ly: </label>
                <input 
                type="number" 
                name="ly" 
                value={inputs.ly || ""} 
                onChange={handleChange}
                />
                <input type="submit" value='OK'/>
            </form>
        </div>
    )
}