import { useState } from 'react'
import ID  from "./ID";

function IDC() {

    const [detailFetch, setDetailFetch] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    const fetchDetail = () => {
        setIsLoading(true)
        fetch('data.json', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
        })
        .then((response)=> {return response.json()})
        .then((data) => {setDetailFetch(data.results)
        setIsLoading(false)})
    }

    return (
        <div>
            <button onClick={fetchDetail}>Ver Detalles</button>
            {isLoading && <p>Loading...</p>}
            <ID details={detailFetch} />
        </div>
    )
}

export default IDC;