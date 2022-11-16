import Header from '../components/Header.js';
import Hero from '../components/Hero.js';

const Home = () => {

    return (

        <>
            <Header/>
            <Hero title={"It's nice to meet you."} desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n eiusmod tempor incididunt ut labore et dolore magna aliqua.`}/>
        </>

    );

}

export default Home;