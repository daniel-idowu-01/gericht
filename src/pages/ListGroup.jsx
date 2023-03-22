import Group from './images/Group.png'

function ListGroup(props) {
    return (
        <div className="md:flex justify-between">
            <div className='mt-2 w-20 md:w-auto block relative left-14 md:left-0'>
                <img className='md:w-10 p-2 h-10' alt='' src={Group}></img>
            </div>
            <div className='md:p-2'>
                <p className=' text-xl text-goldcolor'>{props.name}</p>
                <p className='opacity-50 w-auto mt-2'>{props.desc}</p>
            </div>
        </div>
    )
}

export default ListGroup   