import { useParams } from "react-router-dom"
// import faker from 'faker'

const CatDetails = () => {
    const { id } = useParams

    return (
        <div className="cat-details">
            <h2>Details:</h2>
            <h3>{ id }</h3>
        </div>
    )
}

export default CatDetails;