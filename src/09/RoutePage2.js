import { useLocation, useSearchParams } from "react-router-dom";

export default function RoutePage2() {
  const fruits = ['🍎', '🍌' , '🍉'];
  const loc = useLocation();
  console.log('useLocation pathname : ', loc.pathname); //p2
  console.log('useLocation search : ', loc.search); //?(쿼리스트링)뒤에 주소

  const [sParams] = useSearchParams();
  console.log('useSearchParams : ', sParams); //?(쿼리스트링)뒤에 갯수

  //sParams를 배열로 확인
  const qList = [...sParams];
  console.log('qList : ', qList);
  const lis = qList.map(item => <li key={item[0]}>
                                  {item[1]} : 
                                  {fruits.includes(item[1]) ? "과일" : "과일 아님"}
                                </li>);

  //특정 키 값으로 확인가능(사과)
  console.log(sParams.get('item1'));


  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">
        RoutePage2
      </h1>
      <div className="w-full flex flex-col justify-start items-center
                        text-xl m-2 p-2"> 
        <ul>
          {lis}
        </ul>                          
      </div>
    </div>
  )
}
