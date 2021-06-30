import React from 'react'
import ReactLoading from 'react-loading';

export const Loading = ({ type, color }) => {
    return (
        <div style={{marginLeft:"auto", marginRight:"auto"}}>
        <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
        </div>
    )
}
