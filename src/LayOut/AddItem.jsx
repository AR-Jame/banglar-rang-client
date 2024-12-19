import Swal from "sweetalert2";

const AddItem = () => {
    const handleNewItem = e => {
        e.preventDefault();
        const form = e.target;
        // 
        const painting_name = form.painting_name.value;
        const image_url = form.image_url.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const price = form.price.value;
        const custom = form.custom.value;
        const stock = form.stockStuts.value;
        const description = form.description.value;
        const subCategory = form.subCategory.value
        const formValue = {subCategory, painting_name, price, userName, userEmail, image_url, custom, stock, description }
        console.log(formValue)
        fetch('https://banglar-rang-server.vercel.app/paintings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formValue)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You Added a new item successfully!",
                        icon: "success"
                    });
                    form.reset()
                }

            })
    }
    return (
        <section className="min-h-[89vh] flex items-center justify-center">
            <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
                <header className="text-xl font-medium text-gray-800 text-center">Add a new Painting</header>
                <form onSubmit={handleNewItem} className="mt-6 space-y-5">
                    <div className="mb-4">
                        <label className="block text-gray-800">Painting Name</label>
                        <input
                            type="text"
                            name="painting_name"
                            placeholder="Painting Name"
                            required
                            className="w-full h-12 border rounded-md px-3 focus:ring-1 focus:ring-purple-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-800">Image URL</label>
                        <input
                            type="text"
                            name="image_url"
                            placeholder="Enter The Image URL"
                            required
                            className="w-full h-12 border rounded-md px-3 focus:ring-1 focus:ring-purple-500"
                        />
                    </div>

                    <div className="flex flex-col gap-4 mt-4 md:flex-row mb-4">
                        <div className="w-full">
                            <label className="block text-gray-800">Painter</label>
                            <input
                                type="text"
                                name="userName"
                                placeholder="User Name"
                                required
                                className="w-full h-12 border rounded-md px-3 focus:ring-1 focus:ring-purple-500"
                            />
                        </div>
                        <div className="w-full">
                            <label className="block text-gray-800">Painter's Email</label>
                            <input
                                type="text"
                                name="userEmail"
                                placeholder="User E-mail"
                                required
                                className="w-full h-12 border rounded-md px-3 focus:ring-1 focus:ring-purple-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 pb-4 md:flex-row">
                        <div className="w-full h-12 rounded-md">
                            <label className="block text-gray-700">Sub-Category</label>
                            <select
                                required
                                name="subCategory"
                                className="w-full h-12 border rounded-md px-3 focus:ring-1 focus:ring-purple-500 text-gray-700">
                                <option hidden>Sub-Category</option>
                                <option>LandScape Painting</option>
                                <option>Portrait Drawing</option>
                                <option>Watercolour Painting</option>
                                <option>Oil Painting</option>
                                <option>Charcoal Sketching</option>
                                <option>Cartoon Drawing</option>
                            </select>
                        </div>

                        <div className="w-full h-12 rounded-md focus:ring-1 focus:ring-purple-500 text-gray-700">
                            <label className="block text-gray-800">Price</label>
                            <input
                                type="text"
                                name="price"
                                placeholder="price"
                                required
                                className="w-full h-12 border rounded-md px-3 focus:ring-1 focus:ring-purple-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-4 md:flex-row mb-4 justify-evenly">
                        <div className="mt-4">
                            <h3 className="text-gray-800 mb-2">Customization</h3>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="no"
                                        name="custom"
                                        value='No'
                                        defaultChecked
                                        className="accent-purple-500"
                                    />
                                    <label htmlFor="male" className="ml-2 text-gray-700">No</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="yes"
                                        value='Yes'
                                        name="custom"
                                        className="accent-purple-500"
                                    />
                                    <label htmlFor="yes" className="ml-2 text-gray-700">Yes</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-gray-800 mb-2">Stock Stuts</h3>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center">
                                    <input
                                        value='In Stock'
                                        type="radio"
                                        id="inStock"
                                        name="stockStuts"
                                        defaultChecked
                                        className="accent-purple-500"
                                    />
                                    <label className="ml-2 text-gray-700">IN Stock</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        value='Made on delivary'
                                        type="radio"
                                        id="madeOnDelivary"
                                        name="stockStuts"
                                        className="accent-purple-500"
                                    />
                                    <label className="ml-2 text-gray-700">Made on Delivary</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <label className="block text-gray-800">Short Description</label>
                        <textarea name="description" className="w-full border rounded-md px-3 py-3 focus:ring-1 focus:ring-purple-500" rows='4'></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full h-14 mt-6 bg-[#f49804] font-semibold text-lg text-white rounded-md hover:bg-transparent hover:text-[#f49804] hover:border-[#f49804] hover:border transition">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddItem;