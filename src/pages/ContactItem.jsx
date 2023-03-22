
function ContactItem(props) {
    return (
        <div className=" border p-5 mt-5 md:w-48">
            <div className="text-4xl mt-2 text-goldcolor">{props.icon}</div>
            <h2 className="mt-2">{props.title}</h2>
            <p className="mt-2">{props.desc}</p>
            <p className="mt-2">{props.desc2}</p>
        </div>
    )
}

export default ContactItem