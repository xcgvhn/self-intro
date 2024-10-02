import '../../App.css'
import { useParams } from "react-router-dom";

const proj = [
    {img:'/images/NCUE_BLOCK.png', name:'NCUE BLOCK', tech:'vue.js + electron + php + sql', text:'輔助教師教學方塊程式的教學系統，能夠記錄學生新增、拖拉、刪除方塊等動作並加以回放，幫助教師了解學生學習狀況因材施教，同時配有使用LSTM作為分類模型的評分系統，利用AI輔助教師評分。'}, 
    {img:'images/Diffusion.png', name:'將音色轉為對應的二胡音色', tech:'pytorch', text:'利用Diffusion 作為生成方法將輸入的任意WAV檔案分別經由音高與響度編碼器轉碼後輸入至U-net中將任意音色轉化為對應的二胡音色。'}, 
    {img:'../images/EM.png', name:'人工智慧東方音樂作曲2.0', tech:'asp.net + javascript', text:'能夠根據使用者的喜好選擇不同的音樂生成方式，包括1.利用演算法生成樂曲2.利用深度學習模型(RL + LSTM)生成樂 3.根據文字描述生成樂曲及圖片4.根據文字描述生成樂曲及影片，同時能夠自定義使用甚麼樂器演奏產生出的樂曲。'}, 
    {img:'../images/hugging.png', name:'Huggingface space Demo page', tech:'pytorch + gradio', text:'架設於huggingface space 的DEMO網頁，能夠根據輸入的文字產生出呼應的midi音樂檔，不僅可以使用網頁介面，同時支援使用API的方式呼叫生成midi音樂。'}, 
    {img:'../images/todo.png', name:'React小專案', tech:'React', text:'第一個React小型專案，能夠輸入任意工作、編輯或刪除輸入的工作、將工作標記為已完成。'}, 
]

export default function Project() {
    const params = useParams();
    const data = proj[parseInt(params.id)]
    return (
        <div className="project">
            <h1> {data.name}</h1>
            <img src={data.img} />
            <p>
                <b>Skills:</b> {data.tech}
            </p>
            <div className='project__item__text'>
                {data.text}
            </div>
        </div>
    )
}