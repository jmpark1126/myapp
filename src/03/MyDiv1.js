import MyDiv2 from "./MyDiv2";

export default function MyDiv1() {
    const d1 = 'div1';
    const d2 = 'div2';
    const d3 = 'div3';

  return (
    <div className="flex flex-col p-5 
                    justify-center items-center
                    w-2/3 h2/3 text-2xl 
                    bg-lime-900 text-white">
      <div className="w-full h-10 flex justify-start items-center">
        {d1}
      </div>
      <MyDiv2 dn1={d1} dn2={d2} dn3={d3} />
      {/* probs drilling */}
    </div>
  )
}

//main 수정 중