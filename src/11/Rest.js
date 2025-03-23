import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";

export default function Rest() {
    const [tdata, setTdata] = useState([]);
    const [tags, setTags] = useState([]);

    //초기값은 update 되어있지 않음으로 false
    const [isUpdate, setIsUpdate] = useState(false);
    const [isUpdateId, setIsUpdateId] = useState();

    const txt1Ref = useRef();
    const txt2Ref = useRef();

    const url = 'http://localhost:3005/posts';

    const getFetchData = async () => {
        const resp = await fetch(url);
        const data = await resp.json();

        setTdata(data);
    }

    const jsonPost = async () => {
        if(txt1Ref.current.value == ''){
            alert('제목을 입력하세요.');
            txt1Ref.current.focus();
            return;
        }

        if(txt2Ref.current.value == ''){
            alert('작성자를 입력하세요.');
            txt2Ref.current.focus();
            return;
        }

        const postData = {
            title : txt1Ref.current.value,
            author : txt2Ref.current.value
        }

        //post fetch
        const resp = await fetch(url, {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(postData) //오브젝트를 JSON 형태로 만들어서 전송
        });

        const data = await resp.json();
        console.log(data);

        //기존의 tdata에 새로운 data를 넣음(최신 데이터 앞으로 추가)
        setTdata([ data, ...tdata]);
        txt1Ref.current.value = '';
        txt1Ref.current.focus();
        txt2Ref.current.value = '';
    }

    const jsonDelete = async (id) => {
        await fetch(`${url}/${id}`,{
            method : "DELETE"
        });

        //화면에서도 삭제(보내준 id가 삭제되었음으로 삭제된 id와 같은 id를 화면에서 삭제)
        setTdata(tdata.filter(item => item.id !== id));
    }

    //수정 버튼 클릭시 input 박스에 값이 나오도록 함
    const handelUpdate = (item) => {
        txt1Ref.current.value = item.title;
        txt2Ref.current.value = item.author;

        setIsUpdate(true);
        setIsUpdateId(item.id);
    }

    const handleOk = () => {
        if(isUpdate) jsonPut();
        else jsonPost();
    }

    const jsonPut = async () => {
        const putData = {
            id : isUpdateId,
            title : txt1Ref.current.value,
            author : txt2Ref.current.value
        }

        const resp = await fetch(`${url}/${isUpdateId}`, {
            method : 'PUT',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(putData)
        });

        const data = await resp.json();
        //update 된 id이면 받은 데이터를 넣고 아니면 그대로 둔다
        setTdata(tdata.map(item => item.id === isUpdateId ? data : item));

        txt1Ref.current.value = '';
        txt2Ref.current.value = '';
        txt1Ref.current.focus();
        
        setIsUpdate(false);
        setIsUpdateId('');
    }

    useEffect(()=>{
        getFetchData();
    }, []);

    useEffect(()=>{
        console.log(tdata);

        let tm = tdata.map(item => <tr key={item.id}
                                        className="h-10 border-b">
                                    <td className="text-center">
                                        {item.title}
                                    </td>
                                    <td className="text-center">
                                        {item.author}
                                    </td>
                                    <td className="text-center">
                                        <TailButton caption='삭제'
                                                    bcolor='orange' 
                                                    handleClick={()=>jsonDelete(item.id)} />
                                    </td>
                                    <td className="text-center">
                                        <TailButton caption='수정'
                                                    bcolor='lime' 
                                                    handleClick={()=>handelUpdate(item)} />
                                    </td>

                                    </tr>);
        setTags(tm);
    }, [tdata]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
        <div className="w-11/12 grid grid-cols-1 md:grid-cols-7 
                        bg-slate-100 text-center my-5 p-5">
            <label htmlFor="txt1" className="my-2">제목</label>
            <div className="flex col-span-3">
                <input id="txt1" type="text" className="form-input w-full" ref={txt1Ref} />
            </div>
            <label htmlFor="txt2" className="my-2">작성자</label>
            <div className="flex">
                <input id="txt2" type="text" className="form-input w-full" ref={txt2Ref} />
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
