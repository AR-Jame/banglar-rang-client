import { useLoaderData } from "react-router-dom";
import Paint from "./Paint";
import { useState } from "react";
import Swal from "sweetalert2";

const MyList = () => {
    const loadead = useLoaderData();
    const [data, setData] = useState(loadead);

    const handleDelete = (id) => {
        fetch(`https://banglar-rang-server.vercel.app/paintings/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Succfully deleted",
                        text: "You successfully deleted your painting",
                        icon: "success"
                      });
                }
                const remain = loadead.filter(sing => sing._id !== id);
                setData(remain)
                console.log(remain)
            })
    }
    return (
        <div>
            {
                data.length === 0 ?
                    'No data available....'
                    :
                    <>
                        <h3 className="text-4xl my-10 text-center font-bodoni">All of your Painting</h3>
                        <div className="lg:mx-[15%]">
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                                {
                                    data.map(single =>
                                        <Paint
                                            key={single._id}
                                            data={single}
                                        >
                                            <div className="flex justify-between mt-3">
                                                <button className="p-4 py-2 bg-orange-400 rounded-xl">updata</button>
                                                <button onClick={() => handleDelete(single._id)} className="p-4 py-2 bg-orange-400 rounded-xl">Delete</button>
                                            </div>

                                        </Paint>)
                                }
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default MyList;