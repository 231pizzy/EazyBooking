import "./featured.css";

const Featured = () => {
    return (
        <div className="featured">

            <div className="featuredItem">
            <img src="https://ozom-hotel-enugu.booked.net/data/Photos/Big/9757/975789/975789529/Ozom-Hotel-Enugu-Exterior.JPEG" alt="" className="featuredImg"/>
            <div className="featuredTitles">
             <h1>Ozome Hotel</h1>
             <h2>86 Rooms</h2>
            </div>
            </div>

            <div className="featuredItem">
            <img src="https://thewhistler.ng/wp-content/uploads/2020/09/Nike-Lake-Resort-Enugu-State.jpeg" alt="" className="featuredImg"/>
            <div className="featuredTitles">
             <h1>Nike Lake Hotel</h1>
             <h2>123 Rooms</h2>
            </div>
            </div>

            <div className="featuredItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/bd/bf/87/hotel-sunshine.jpg?w=700&h=-1&s=1" alt="" className="featuredImg"/>
            <div className="featuredTitles">
             <h1>Hotel Sunshine</h1>
             <h2>99 Rooms</h2>
            </div>
            </div>
        </div>
    );
};


export default Featured;