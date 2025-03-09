import MyTest02 from "./MyTest02";

export default function MyTest01() {

    const num1 = 'h1';
    const num2 = 'h2';
    const num3 = 'h3';

  return (
    <div>
      <h1>{num1} 태그 입니다.</h1>
      <MyTest02 n2={num2} n3={num3} />
      
    </div>
  )
}
