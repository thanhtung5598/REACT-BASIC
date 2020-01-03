import React from 'react';
import PropTypes from 'prop-types';


const List = ({data,render}) => {
    return (
        <div>
            {data.map(render)}
        </div>
    );
};


List.propTypes = {
    data:PropTypes.array,
    render:PropTypes.func
};


export default List;
