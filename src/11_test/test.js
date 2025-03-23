import { data } from "react-router-dom";
import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";

export default function Rest() {
    const [tdata, setTdata] = useState([]);
    const [tags, setTags] = useState([]);

    //초기값은 update 되어있지 않음으로 false
    const [isUpdate, setIsUpdate] = useState(false);
    const [isUpdateId, setIsUpdateId] = useState();

    const titleRef = useRef();
    const authorRef = useRef();

    //입력 / 수정
    const handleOk = () => {
        if(isUpdate){
            jsonPut();
        }else{
            jsonPost();
        }
    }

    const url = 'http://localhost:3005/posts';

    const getFetchData = async() => {
        const resp = await fetch(url);
        const data = await resp.json();

        setTdata(data);
    }

    //입력
    const jsonPost = async () => {
        if(titleRef.current.value == ""){
            alert("제목을 입력하세요!");
            return;
        }
        if (authorRef.current.value == ""){
            alert("작성자를 입력하세요!");
            return;
        }

        const postData = {
            title : titleRef.current.value,
            author : authorRef.current.value
        }

        const resp = await fetch(url, {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(postData)
        })

        const data = await resp.json();

        setTdata([data, ...tdata]);
        titleRef.current.value = "";
        authorRef.current.value = "";
        titleRef.current.focus();
    }

    //수정 버튼
    const jsonPut = async () => {
        const putData = {
            id : isUpdateId,
            title : titleRef.current.value,
            author : authorRef.current.value 
        }

        const resp = await fetch(`${url}/${isUpdateId}`, {
            method : "PUT",
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(putData),
        });

        const data = await resp.json();

        setTdata(tdata.map(item => item.id === isUpdateId ? data : item));

        titleRef.current.value = "";
        authorRef.current.value = "";
        titleRef.current.focus();

        setIsUpdate(false);
        setIsUpdateId('');
    }

    //삭제 버튼
    const jsonDelete = async (id) => {
        await fetch(`${url}/${id}`, {
            method : "DELETE"
        });
        setTdata(tdata.filter(item => item.id !== id));
    }

    //수정 입력 칸에 내용 넣기
    const handelUpdate = (item) => {
        titleRef.current.value = item.title;
        authorRef.current.value = item.author;

        setIsUpdate(true);
        setIsUpdateId(item.id);
    }

    useEffect(()=>{
        getFetchData();
    }, []);

    useEffect(()=>{
        console.log(tdata);
        let temp = tdata.map(item => <tr key={item.id}
                                            className="h-10 border-b">
                                        <td className="text-center">
                                            {item.title}
                                        </td>
                                        <td className="text-center">
                                            {item.author}
                                        </td>
                                        <td className="text-center">
                                            <TailButton bcolor="orange" caption="삭제" handleClick={()=>jsonDelete(item.id)}/>
                                        </td>
                                        <td className="text-center">
                                            <TailButton bcolor="lime" caption="수정" handleClick={()=>handelUpdate(item)}/>
                                        </td>                                  
                                    </tr>);
        setTags(temp);
    },[tdata]);


  return (
    <div className="w-full flex flex-col justify-center items-center">
        <div className="w-11/12 grid grid-cols-1 md:grid-cols-7 
                        bg-slate-100 text-center my-5 p-5">
            <label htmlFor="txt1" className="my-2">제목</label>
            <div className="flex col-span-3">
                <input id="txt1" type="text" className="form-input w-full" ref={titleRef} />
            </div>
            <label htmlFor="txt2" className="my-2">작성자</label>
            <div className="flex">
                <input id="txt2" type="text" className="form-input w-full" ref={authorRef} />
            </div>
            <TailButton caption={isUpdate ? "수정" : "입력"} bcolor='blue' handleClick={handleOk} />
        </div>
        <table className="w-11/12 text-left text-sm font-light text-surface">
            <thead className="border-b border-neutral-200 font-medium">
                <tr className="bg-black text-white font-bold text-center">
                    <th scope="col" className="px-6 py-3 w-3/6 text-center">제목</th>
                    <th scope="col" className="px-6 py-3 w-1/6 text-center">작성자</th>
                    <th scope="col" className="px-6 py-3 w-1/6 text-center">삭제</th>
                    <th scope="col" className="px-6 py-3 w-1/6 text-center">편집</th>
                </tr>
            </thead>
            <tbody>
                {tags}
            </tbody>
        </table>
    </div>
  )
}
