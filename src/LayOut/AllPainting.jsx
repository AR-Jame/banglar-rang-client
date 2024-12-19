import { useLoaderData } from "react-router-dom";
import Paint from "./Paint";

const AllPainting = () => {
    const allPaintings = useLoaderData();
    return (
        <div className="lg:mx-[15%]">
            <h3 className="font-bodoni text-4xl text-center my-10">See All Paintings</h3>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {
                    allPaintings.map(painting => <Paint key={painting._id} data={painting} />)
                }
            </div>
        </div>
    );
};

export default AllPainting;