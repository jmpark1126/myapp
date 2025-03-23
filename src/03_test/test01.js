import Test02 from "./test02";

export default function test01() {

    const t1 = 100;
    const t2 = 200;

    return(
        <div>
            test01 페이지
            <Test02 t1={t1} t2={t2} />
        </div>
    );
}