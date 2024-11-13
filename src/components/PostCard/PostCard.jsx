import Button from "../Button/Button";

export default function PostCard() {
    return (
        <div className="card col-6">
            <div className="card-img">
                <img src="https://picsum.photos/600/400" alt="" />
            </div>
            <div className="card-body">
                <div className="title">
                    <span>Titolo del post</span>
                </div>
                <div className="decription">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at. Doloribus possimus labore hic quisquam commodi nam asperiores dolores cumque, earum cupiditate fuga mollitia eum impedit omnis! Porro, placeat non.</p>
                </div>
                <Button />
            </div>
        </div>
    );
};