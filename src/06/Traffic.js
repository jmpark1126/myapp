import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";

export default function Traffic() {

    //전체 fetch 데이터
    const [tdata, setTdata] = useState();

    //대분류 데이터
    const [c1, setC1] = useState();
    //선택된 대분류 저장
    const [selC1, setSelC1] = useState();

    //중분류 데이터
    const [c2, setC2] = useState();
    //선택된 중분류 저장
    const [selC2, setSelC2] = useState();

    //상세정보
    const [info, setInfo] = useState();

    //2. 
    const getFetchData = () => {
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?`
        url = `${url}page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`;

        console.log(url);

        fetch(url) //pending 중...
          .then(resp => resp.json()) //json 형태로 받음(정상)
          .then(data => setTdata(data.data)) //tdata 값 변경(정상)
          .catch(err => console.error(err)); //오류 로그 확인
    }

    //1. 컴포넌트 생성 시 fetch(useEffect 한 번 사용)
    useEffect(()=>{
        getFetchData();
    }, []);

    //3. tdata가 변경되었을 때 실행
    useEffect(()=>{

      //tdata가 없으면 대분류 생성 불가로 return 처리
      if(!tdata) return;

      //대분류 만들기
      let tm = tdata.map(item => item['사고유형대분류']); //tdata 돌면서 '사고유형대분류'만 가져오기
      tm = [... new Set(tm)]; //집합 생성 : 중복제거해줌
      setC1(tm); //선택된 대분류는 c1에 저장
    }, [tdata]);

    //selC1 결정 후에 실행
    useEffect(()=>{
      //중분류 만들기
      //해당 값이 없으면 return 처리
      if(!tdata || !c1 || !selC1) return ;

      let tm = tdata.filter(item => item['사고유형대분류'] === selC1)
                // .map(item => item['사고유형중분류']); //중분류>도로이탈 중복!
                .map(item => item['사고유형']);
      setC2(tm);
    }, [selC1]);

    //selC2 결정 후에 실행행
    useEffect(()=>{
      if(!selC2) return;

      let tm = tdata.filter(item => item['사고유형대분류'] === selC1 && 
                                    item['사고유형'] === selC2)[0]; //배열이 아니고 object로 받기 위해서 [0]
      // console.log('선택 항목', tm);
      const infoKey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수'];

      tm = infoKey.map(item => <div key={item} className="flex">
                                  <div className="w-1/2 h-10 flex justify-center items-center
                                                  bg-lime-600 text-white font-bold">
                                    {item}
                                  </div>
                                  <div className="w-1/2 h-10 flex justify-center items-center border">
                                    {/* 쉼표 사용 */}
                                    {parseInt(tm[item]).toLocaleString()} 
                                  </div>
                                </div> )
      setInfo(tm);
    }, [selC2]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      {/* c1이 존재하는 경우에만(&&) 실행 */}
      {c1 && <TrafficNav title = '대분류'
                  c = {c1} //대분류 데이터 목록
                  sel = {selC1} //현재 선택된 대분류
                  setSel = {setSelC1} //selC1을 바꿀 수 있는 함수
      />}
      {c2 && <TrafficNav title = '사고유형'
                  c = {c2} //중중분류 데이터 목록록
                  sel = {selC2} //현재 선택된 중분류
                  setSel = {setSelC2} //selC2를 바꿀 수 있는 함수
      />}
      <div className="w-full grid grid-cols-1 
                      md:grid-cols-2 lg:grid-cols-5 gap-2">
        {info}
      </div>
    </div>
  )
}
