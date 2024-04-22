import React from "react";
import PropTypes from 'prop-types';

export const Cards = (props) => {
    return (
        <div className="card m-2" style={{ width: '18rem' }}>
            <img className="card-img-top" style={{ height: '10rem' }} src={props.image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="www.robertoburguers.com" className="btn btn-primary">{props.buy}</a>
            </div>
        </div>
    )
}

Cards.Proptypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buy: PropTypes.string
} 



/*Cards.defaultProps = {
    image: hamburguesa,
    title: burguer,
    description: 'from Roberto Burguers',
    buy: 'super price'
} */