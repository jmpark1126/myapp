import { Link } from "react-router-dom";

export default function Home(){

    return(
        <div>
            <h1 className="m-10">Home</h1>
            {/* page1으로 값을 하나씩 넘기기 */}
            <div className="m-10">
                <p>page1으로 값 넘기기</p>
                <ul>
                    <li><Link to="/page1/a">a 넘기기</Link></li>
                    <li><Link to="/page1/b">b 넘기기</Link></li>
                    <li><Link to="/page1/3">c 넘기기</Link></li>
                </ul>
            </div>
            <bn />
            {/* page2로 값을 쿼리 스트링으로 넘기기 */}
            <div className="m-10">
                <p>page2로 값 넘기기</p>
                <ul>
                    <li><Link to={"/page2?item1=a&item2=b&item3=3"}>쿼리스트링으로 다 넘기기</Link></li>
                </ul>
            </div>
        </div>
    );
}