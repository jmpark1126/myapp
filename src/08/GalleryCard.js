export default function GalleryCard() {

    const item = {
        "galContentId": "2586952",
            "galContentTypeId": "17",
            "galTitle": "서울빛초롱축제",
            "galWebImageUrl": "http://tong.visitkorea.or.kr/cms2/website/52/2586952.jpg",
            "galCreatedtime": "20190109152342",
            "galModifiedtime": "20190109152354",
            "galPhotographyMonth": "201811",
            "galPhotographyLocation": "서울특별시 종로구",
            "galPhotographer": "라이브스튜디오",
            "galSearchKeyword": "서울빛초롱축제, 서울특별시 종로구, 2018 하반기 기획사진, 청계천 야경, 서울 등 축제, 서울 축제"
    }

    //,가 있으면 분리/, 없으면 배열로 만듦
    let spTags = item.galSearchKeyword.includes(',') ? item.galSearchKeyword.split(',') : [item.galSearchKeyword]
    spTags = spTags.map(kw => <span className="inline-block bg-gray-200 
                                            rounded-full px-3 py-1 
                                            text-sm font-semibold
                                            text-gray-700 mr-2 mb-2"
                                    key={kw}>{kw}</span>)


  return (
    <div className="max-w-sm rounder overflow-hidden shadow-lg">
        <img className="h-48 w-full" 
                //http가 있을 경우 https로 변환
                src={item.galWebImageUrl.includes('http:')
                    ? item.galWebImageUrl.replace('http:', 'https:')
                    : item.galWebImageUrl}
                alt = {item.galTitle}  />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
                {item.galTitle}
            </div>
            <div className="text-gray-700">
                {item.galPhotographyLocation}
            </div>
        </div>
        <div className="px-6 pt-4 pb-2">
            {spTags}
        </div>
              
    </div>
  )
}
