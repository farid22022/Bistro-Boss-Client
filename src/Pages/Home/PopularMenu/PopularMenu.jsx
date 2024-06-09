// import { useEffect, useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className="mb-12 text-center ">
            <div className="mx-auto text-center md:4/12 my-8">
                <p className="text-center text-yellow-600">---From Our Team---</p>
                <h3 className="text-4xl uppercase border-y-4 py-4">Popular Items</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-10"> 
                {
                    popular.map(item =><MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className='btn btn-outline border-0 border-b-4 mt-4 text-center'>View Full Menu </button>

        </section>
    );
};

export default PopularMenu;