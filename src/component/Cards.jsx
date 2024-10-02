import CardItem from "./CardItem"
import './Cards.css'

function Cards() {
    return(
    <div className='cards'>
        <h1>作品集</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src="images/NCUE_BLOCK.png"
                    text={"NCUE BLOCK"}
                    label='大學專題'
                    path='/project/0'
                    />
                    <CardItem 
                    src="images/Diffusion.png"
                    text={"將音色轉為對應的二胡音色"}
                    label='碩士論文'
                    path='/project/1'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="images/EM.png"
                    text={"人工智慧東方音樂作曲2.0"}
                    label='碩士'
                    path='/project/2'
                    />
                    <CardItem 
                    src="images/hugging.png"
                    text={"Huggingface space Demo page"}
                    label='小專案'
                    path='/project/3'
                    />
                    <CardItem 
                    src="images/todo.png"
                    text={"React小專案"}
                    label='小專案'
                    path='/project/4'
                    />
                </ul>
            </div>
        </div>
    </div>
    )
}
export default Cards