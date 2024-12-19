import PropTypes from "prop-types";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Paint = ({ data, children }) => {
    const { painting_name, price, image_url, userName, _id } = data;
    return (
        <div>
            <img className="w-[350px] h-[450px] p-4 border-[8px] mb-3 object-contain" src={image_url} />
            <div className="flex gap-5">
                <div className="flex flex-col">
                    <h4 className="text-xl font-bodoni font-semibold">{painting_name}</h4>
                    <p>{userName}</p>
                </div>
                <div className="flex flex-col items-start">
                    <p className="font-semibold text-xl">BDT : {price}</p>
                    <Link to={`/all_paint/${_id}`}>
                        <button className="flex items-center gap-2 hover:text-[#f49804] transition-all duration-500 hover:translate-x-3">see Details <IoMdArrowForward /></button>
                    </Link>
                </div>
            </div>
            {children}
        </div>
    );
};

Paint.propTypes = {
    data: PropTypes.object,
    children: PropTypes.node,
}
export default Paint;