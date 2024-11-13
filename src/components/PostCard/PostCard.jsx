import Button from "../Button/Button";

export default function PostCard({ data }) {
    return (
        <div className="card col-6">
            <div className="card-img">
                <img src={data.image} alt="" />
            </div>
            <div className="card-body">
                <div className="title">
                    <span>{data.title}</span>
                </div>
                <div className="decription">
                    <p>{data.content}</p>
                </div>
                <div className="tags">
                    <a href="#">{data.tags[0]} {data.tags[1]}</a>
                </div>

                <Button />
            </div>
        </div>
    );
};