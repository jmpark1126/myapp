import { useParams } from "react-router-dom";

export default function Page1(){

    const item = useParams().item;
    // console.log("item => ", item);
    const List = ['a', 'b', 'c'];

    let temp = "";
    if(List.includes(item)){
        temp = item;
    }

    return(
        <div>
            <h1>page1</h1>
            {temp ? "알파벳입니다!" : "알파벳이 아닙니다..."}
            <br/>
            {temp ? temp : item}
        </div>
        
    );
}