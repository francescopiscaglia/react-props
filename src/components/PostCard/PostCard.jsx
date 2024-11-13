import Button from "../Button/Button";

export default function PostCard({ data }) {

    //logic
    const tagColor = {
        html: "green",
        css: "red",
        js: "Blue",
        php: "Brown"
    };


    // render
    return (
        <div className="card col-6">

            {/* card img */}
            <div className="card-img">
                <img src={data.image} alt="" />
            </div>
            {/* card body */}
            <div className="card-body">
                <div className="title">
                    <span>{data.title}</span>
                </div>
                <div className="decription">
                    <p>{data.content}</p>
                </div>
                <div className="tags">
                    {data.tags.map((tag, index) => <a
                        href="#" key={index} style={{ color: tagColor[tag] }}>{tag}
                    </a>)}
                </div>

                <Button />
            </div>
        </div>
    );
};