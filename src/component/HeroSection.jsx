import './HeroSection.css';
import '../App.css';
import { Button } from './Button';

function HeroSection() {
    return(
        <div className="hero-container">
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
            <h1>作品集</h1>
            <p></p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAIKER<i className='far fa-play-circle'></i></Button>
            </div>
        </div>
    )
}

export default HeroSection