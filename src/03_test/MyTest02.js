import Mytest03 from "./Mytest03"

export default function MyTest02(prop) {
  return (
    <div>
        <h2>{`${prop.n2}`} 태그 입니다.</h2>
        <Mytest03 n3={prop.n3} />
    </div>
  )
}
