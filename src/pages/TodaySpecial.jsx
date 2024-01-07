
function TodaySpecial(props) {
    return (
        <div className="flex justify-around md:w-full mt-8 md:mt-16">
            <div>
                <h4 className="text-gold color">{props.name}</h4>
                <p className="opacity-50 w-40">{props.desc}</p>
            </div>
            <div>
                -----------
            </div>
            <div className="">
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export default TodaySpecial