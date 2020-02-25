import React from 'react'

export default function ({ index, details, name, image, list }) {
    return (
        <details className="card-details" key={index} >

            <summary className="card-summary" >{name}</summary>

            <div className="card-container">

                <div className="card-info">
                    {details.map((detail, i) => (
                        <details className="card-info-item" key={i} open>
                            <summary className="card-info-item-summary">{detail[0]}</summary>
                            <p className="card-info-item-data">{detail[1]}</p>
                        </details>
                    ))}

                    <details className="card-info-item" open>
                        <summary className="card-info-item-summary">{list.name}</summary>
                            {list.value}
                    </details>

                </div>
                {image ?
                    <div className="card-image-container">
                        <img className="card-image" src={image} alt={name} />
                    </div>
                    : null}


            </div>

        </details>
    )
}