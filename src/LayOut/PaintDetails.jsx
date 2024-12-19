import { useLoaderData } from "react-router-dom";

const PaintDetails = () => {
    const data = useLoaderData()
    console.log(data)
    const { painting_name, price, stock, image_url, userName, description, userEmail, subCategory, custom } = data
    return (
        <div className="lg:mx-[15%]">
            <div className="flex flex-col mt-16 lg:mt-0 lg:flex-row items-center justify-center gap-5 min-h-[89.8vh]">
                <div className="flex-1 text-right ">
                    <p className="font-handy font-extrabold text-6xl mb-3">{painting_name}</p>
                    <p className="font-bodoni text-3xl">{userName}</p>
                </div>
                <img src={image_url} className="max-h-[75vh]" />
                <p className="flex-1 font-lota text-xl">
                    <span className="text-4xl text-slate-500">❝</span>
                    {description}
                    <span className="text-4xl text-slate-500">❞</span>
                </p>
            </div>
            <hr className="my-4" />
            <h5 className="text-center my-5 text-4xl mb-8">Details about this Picture</h5>
            <div className="flex justify-center font-lota text-xl gap-3">
                <div className="flex flex-col">
                    <p>Name</p>
                    <p>Painter</p>
                    <p>price</p>
                    <p>E-mail</p>
                    <p>Sub Category</p>
                    <p>Stock Stuts</p>
                    <p>Customization</p>
                </div>
                <div>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                </div>
                <div>
                    <p>{painting_name}</p>
                    <p>{userName}</p>
                    <p>{price}</p>
                    <p>{userEmail}</p>
                    <p>{subCategory}</p>
                    <p>{stock}</p>
                    <p>{custom}</p>
                </div>

            </div>

            <br /><br /><br />
        </div>
    );
};

export default PaintDetails;