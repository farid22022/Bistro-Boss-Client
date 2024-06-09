import { Helmet } from 'react-helmet-async';
// import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../../Hooks/useMenu';
import MenuCategory from './MenuCategory/MenuCategory';
import Cover from '../../Shared/Cover/Cover';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            {/* main cover */}
            {/* <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle> */}
            <div className="mx-auto text-center md:4/12 my-8">
                <p className="text-center text-yellow-600">---Do not Miss---</p>
                <h3 className="text-4xl uppercase border-y-4 py-4">Todays Offer</h3>
            </div>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items  */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;