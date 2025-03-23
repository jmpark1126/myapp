import TailButton from '../UI/TailButton'
import { useNavigate } from 'react-router-dom'

export default function Nav() {

    const nav = useNavigate();
    return (
        <div>
            <TailButton bcolor="lime" caption="Home" handleClick={()=>nav('/')}/>
            <TailButton bcolor="blue" caption="Page1" handleClick={()=>nav("/page1")}/>
            <TailButton bcolor="blue" caption="Page2" handleClick={()=>nav("/page2")}/>
        </div>
    )
  
}
