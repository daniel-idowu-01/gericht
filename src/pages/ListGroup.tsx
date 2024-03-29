import React from 'react'
import Group from './images/Group.png'

function ListGroup(props: any) {
    return (
        <div className="md:flex justify-between">
            <div className='mt-2'>
                <img className='md:w-10 p-2 h-10 mx-auto' alt='' src={Group}></img>
            </div>
            <div className='p-2'>
                <p className=' text-2xl text-goldcolor'>{props.name}</p>
                <p className='opacity-50'>{props.desc}</p>
            </div>
        </div>
    )
}

export default ListGroup   