/** 
export default function test02({t1, t2}) {
  return (
    <div>
      t1 : {`${t1}`}
      <br />
      t2 : {`${t2}`}
    </div>
  )
}
*/

export default function test02(props) {
    return (
      <div>
        t1 : {`${props.t1}`}
        <br />
        t2 : {`${props.t2}`}
        <br />
        t3 : {props.t3 != null ? `${props.t3}` : "null"}
      </div>
    )
  }
  