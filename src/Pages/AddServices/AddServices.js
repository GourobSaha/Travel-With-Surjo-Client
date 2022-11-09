import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const AddServices = () => {
    useTitle('Add Service')

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const duration = form.duration.value;
        const description = form.description.value;
        // console.log(name, img, price, rating, duration, description);

        const services = {
            name: name,
            price: price,
            rating: rating,
            duration: duration,
            img: img,
            description: description
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service Added Successfully');
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='container mx-auto my-5'>
            <h2 className='text-4xl font-semibold text-center text-indigo-600'>Add Services</h2>
            <form onSubmit={handleAddService} className='my-10'>
                <div className='grid grid-cols-1 gap-4 w-full lg:w-1/2 mx-auto'>
                    <div>
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Place Name" className="input input-bordered input-primary w-full " required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Service Image URL</span>
                        </label>
                        <input name='img' type="text" placeholder="Image URL" className="input input-bordered input-primary  w-full " required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Service Price</span>
                        </label>
                        <input name='price' type="number" placeholder="Price" className="input input-bordered input-primary  w-full " required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Service Rating</span>
                        </label>
                        <input name='rating' type="text" placeholder="Rating" className="input input-bordered input-primary  w-full " required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Service Duration</span>
                        </label>
                        <input name='duration' type="text" placeholder="Duration" className="input input-bordered input-primary  w-full " required />
                    </div>
                    <div className='mt-5'>
                        <label className="label">
                            <span className="label-text">Service Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-primary w-full" placeholder="Description" required></textarea>
                    </div>
                </div>
                <div className='text-center my-2'>
                    <input type="submit" className='btn btn-primary' value="Add Service" />
                </div>
            </form>
        </div>
    );
};

export default AddServices;