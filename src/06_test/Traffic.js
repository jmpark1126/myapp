import { useState, useEffect, use, useReducer } from "react"
import TrafficNav from './TrafficNav';

export default function Traffic() {

  const [tdata, setTdata] = useState([]);

  //대분류
  const [c1, setC1] = useState();
  const [selC1, setSelC1] = useState();

  //중분류
  const [c2, setC2] = useState();
  const [selC2, setSelC2] = useState();

  //상세정보
  const [info, setInfo] = useState();

  const getFetchData = () => {
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?`
    url = `${url}page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`;

    console.log(url);

    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.data))
      .catch(err => console.log(err))
  };

  useEffect(()=>{
    getFetchData();
  }, []);

  useEffect(()=>{
    if(!tdata) return;

    //대분류 만들기
    let temp = tdata.map(item => item['사고유형대분류']);
    temp = [...new Set(temp)];
    console.log(temp);
    setC1(temp);
  }, [tdata]);

  useEffect(()=>{
    if(!tdata || !c1 || !selC1) return;

    let temp = tdata.filter(item => item['사고유형대분류'] === selC1)
                    .map(item => item['사고유형'])
    console.log(temp);
    setC2(temp);
  }, [selC1]);

  useEffect(()=>{
    if(!selC2) return;

    let temp = tdata.filter(item => item['사고유형대분류'] === selC1 && 
                              item['사고유형'] === selC2)[0];
                              
    const infoKey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수'];

    temp = infoKey.map(item => <div key={item} className="flex">
                                  <div className="w-1/2 h-10 flex justify-center items-center
                                                  bg-lime-600 text-white font-bold">
                                    {item}
                                  </div>
                                  <div className="w-1/2 h-10 flex justify-center items-center border">
                                    {/* 쉼표 사용 */}
                                    {parseInt(temp[item]).toLocaleString()} 
                                  </div>
                                </div>)
    console.log(temp);
    setInfo(temp);
  }, [selC2]);
   
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      {c1 && <TrafficNav title='대분류' c={c1} select={selC1} setSelect={setSelC1} />}
      {c2 && <TrafficNav title='중분류' c={c2} select={selC2} setSelect={setSelC2} />} 
      <div className="w-full grid grid-cols-1 
                      md:grid-cols-2 lg:grid-cols-5 gap-2">
        {info}
      </div>
    </div>
  )
}
