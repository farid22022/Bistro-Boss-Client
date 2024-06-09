import featuredImg from '../../../assets/home/featured.jpg' ;
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-10 my-20'>
            <div className="mx-auto text-center md:4/12 my-8">
                <p className="text-center text-yellow-600">---check it out---</p>
                <h3 className="text-4xl uppercase border-y-4 py-4">Featured Items</h3>
            </div>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where I can get some?</p>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;