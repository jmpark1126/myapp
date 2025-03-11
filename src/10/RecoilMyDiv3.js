import TailButton from "../UI/TailButton";
import { AtomN } from "./AtomN";
import { useRecoilState } from "recoil";

export default function RecoilMyDiv3({d1, d2, d3}) {

  const [n, setN] = useRecoilState(AtomN);

  const handleUp = () => {
    setN(n + 1);
    localStorage.setItem("n", n); //localStorage에 값 저장
  }

  const handleDown = () => {
    setN(n - 1);
    localStorage.setItem("n", n); //localStorage에 값 저장
  }

  // const handleSave = () => {
  //   //localStorage에 값 저장
  //   localStorage.setItem("n", n);
  // }

  const handleRemove = () => {
    //localStorage에 값 삭제
    localStorage.removeItem("n". n);
    setN(0); //값 초기화
  }

  return (
    <div className='flex flex-col p-5 m-10
                    w-3/4 h-3/4
                    bg-lime-500 text-white'>
      {`${d1} > ${d2} > ${d3}`}
      <div className="grid grid-cols-4 mt-2">
        <TailButton caption='증가' bcolor='blue' handleClick={handleUp} />
        <TailButton caption='감소' bcolor='blue' handleClick={handleDown} />
        {/* <TailButton caption='저장' bcolor='blue' handleClick={handleSave} /> */}
        <TailButton caption='삭제제' bcolor='blue' handleClick={handleRemove} />
      </div>
    </div>
  )
}
