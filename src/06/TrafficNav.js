import TailButton from '../UI/TailButton';

export default function TrafficNav({title, c, sel, setSel}) {
    //넘어오는 카테고리 목록 갯수(c)만큼 버튼(cTag) 생성 반복
    const cTag = c.map(item => <TailButton 
                                    key = {item}
                                    caption = {item}
                                    //선택된 아이템(대분류)과 현재 아이템이 같으면 orange 아니면 blue
                                    bcolor = {sel === item ? 'orange' : 'blue'}
                                    handleClick = {() => handleClick(item)} 
                                />);
    // 버튼 클릭
    const handleClick = (item) => {
        setSel(item); //선택된 대분류 삽입
    }

    return (
        <div className="w-full flex justify-start items-center my-5">
            <div className="w-1/5 flex justify-start items-center">
                교통사고 {title}
            </div>
            <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {cTag}
            </div>
        
        </div>
    )
}
