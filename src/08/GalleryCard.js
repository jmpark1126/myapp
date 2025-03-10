export default function GalleryCard({item}) {

    //,가 있으면 분리/, 없으면 배열로 만듦
    let spTags = item.galSearchKeyword.includes(',') ? item.galSearchKeyword.split(',') : [item.galSearchKeyword]
    spTags = spTags.map(kw => <span 
                                className="inline-block bg-gray-200 
                                            rounded-full px-3 py-1 
                                            text-sm font-semibold
                                          text-gray-700 mr-2 mb-2"
                                key={kw}>{kw}</span>
                        );


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
