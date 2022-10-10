function Card(props) {
    return (
        <div className="card">
            <div className="card--img">
                <img src={props.item.thumbnailUrl} alt="" />
            </div>

            <div className="card--info">
                <p>{props.item.title}</p>
            </div>
        </div>
    );
}

export default Card;
