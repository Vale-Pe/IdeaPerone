import Detail from './Detail';

function ID(props) {
    return(
        <div>
            {props.details.map((detail) => 
                <Detail
                    title={detail.title}
                    description={detail.description}
                    price={detail.price}
                />
            )}
        </div>
    )
}

export default ID;