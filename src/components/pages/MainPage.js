
import AllPallete from '../allPallete/AllPallete';
import CategoryNews from '../categoryNews/CategoryNews';
import IntroSlider from '../introSlider/IntroSlider';

const MainPage = (props) => {
    return (
        <>
        <IntroSlider/>
        <AllPallete/>
        <CategoryNews updateCategory={props.updateCategory}/>
        </>
    )
}

export default MainPage;