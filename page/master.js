let pass1 = document.querySelector("#pass1")
let pass2 = document.querySelector("#pass2")
let passimg = document.querySelector("#passimg")

onload = () => {
    var 쿼리스트링 = new URLSearchParams(window.location.search)
    let text = 쿼리스트링.get('id')
    if(text === '서울') {
        $(pass1).append('서울 전 지역')
        pass2.textContent = '서울 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F001.png?alt=media&token=fcddc796-ca13-4a8f-97ec-a23737f6fdac'
    }
    if(text === '부산대구인천광주대전울산') {
        $(pass1).append('부산 / 대구 / 인천 / 광주 / 대전 / 울산')
        pass2.textContent = '부산, 대구, 인천, 광주, 대전, 울산을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F002.png?alt=media&token=946997b1-74d6-4ab1-a8db-42f24d7e22a7'
    }
    if(text === '경기강원충북충남전북전남경북경남') {
        $(pass1).append('경기 / 강원 / 충북 / 충남 / 전북 / 전남 / 경북 / 경남')
        pass2.textContent = '경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F003.png?alt=media&token=dde71d23-54c7-4259-b668-84c60a69c083'
    }
    if(text === '세종') {
        $(pass1).append('세종')
        pass2.textContent = '세종을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F004.png?alt=media&token=c5102dc2-4216-440b-848c-3a794004244a'
    }
    if(text === '제주') {
        $(pass1).append('제주')
        pass2.textContent = '제주를'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/madoyo-78d70.appspot.com/o/sky%2F005.png?alt=media&token=d78f97d1-c34c-47fb-b260-3f6b6448065f'
    }
}