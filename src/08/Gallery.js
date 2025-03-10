import GalleryCard from "./GalleryCard"
import TailButton from "../UI/TailButton"
import { useState, useEffect, useRef } from "react"

export default function Gallery() {

    const [tdata, setTdata] = useState([]);
    const [cards, setCards] = useState([]);
    const inRef = useRef();

    const getFetchData = () => {
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = `${url}serviceKey=${process.env.REACT_APP_API_KEY}`;
        url = `${url}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
        url = `${url}&keyword=${encodeURI(inRef.current.value)}&_type=json`; //한글 인코딩함수

        console.log(url);

        fetch(url)
            .then(resp => resp.json())
            // .then(data => console.log(data.response.body.items.item))
            .then(data => setTdata(data.response.body.items.item))
            .catch(err => console.error(err));
    }

    //확인 버튼
    const handleOk = (e) => {
        e.preventDefault();

        if(inRef.current.value == ''){
            alert('키워드를 입력하세요.');
            inRef.current.focus();
            return;
        }
        //inRef 값으로 검색
        getFetchData();
    }

    //취소 버튼
    const handleClear = () => {

    }

    useEffect(()=>{
        //화면 최초 진입 시에 포커싱
        inRef.current.focus();
    },[]);

    useEffect(()=>{
        let tm = tdata.map(item => <GalleryCard 
                                    item ={item}
                                    key={item.galContentId} />
    );
    setCards(tm);
    }, [tdata]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
        <form className="w-10/12 h-24 flex justify-center items-center">
        <div>
            <input type="text" id="txt1" 
                ref={inRef}
                className="form-input rounded w-full" />
        </div>
        <div>
            <TailButton caption='확인' 
                        bcolor='blue' 
                        handleClick={handleOk} />
            <TailButton caption='취소' 
                        bcolor='blue' 
                        handleClick={handleClear} />
        </div>
        </form>
        <div className="w-10/12 grid grid-cols-1
                      md:grid-cols-2 lg:grid-cols-3 gap-2">
            {cards}
        </div>
    </div>
  )
}
