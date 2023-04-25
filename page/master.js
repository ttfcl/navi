let pass1 = document.querySelector("#pass1")
let pass2 = document.querySelector("#pass2")
let passimg = document.querySelector("#passimg")

onload = () => {
    var 쿼리스트링 = new URLSearchParams(window.location.search)
    let text = 쿼리스트링.get('id')
    if(text === '서울') {
        $(pass1).append('서울 전 지역')
        pass2.textContent = '서울 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/bitscale-1b2d1.appspot.com/o/navi%2F001.png?alt=media&token=55277546-6124-4efe-8f35-c901c01a223e'
    }
    if(text === '부산') {
        $(pass1).append('부산 전 지역')
        pass2.textContent = '부산 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/bitscale-1b2d1.appspot.com/o/navi%2F002.png?alt=media&token=16496990-f0f0-4942-bc3f-9675320bd767'
    }
    if(text === '대구') {
        $(pass1).append('대구 전 지역')
        pass2.textContent = '대구 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/bitscale-1b2d1.appspot.com/o/navi%2F003.png?alt=media&token=e4a21436-42a9-43bb-bb27-78040ec76a90'
    }
    if(text === '인천') {
        $(pass1).append('인천 전 지역')
        pass2.textContent = '인천 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/bitscale-1b2d1.appspot.com/o/navi%2F004.png?alt=media&token=71497eab-5770-44b8-b71a-8b23a505e012'
    }
    if(text === '광주') {
        $(pass1).append('광주 전 지역')
        pass2.textContent = '광주 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/bitscale-1b2d1.appspot.com/o/navi%2F005.png?alt=media&token=c7754268-2c25-42a3-a27e-82db906ee20c'
    }
    if(text === '대전') {
        $(pass1).append('대전 전 지역')
        pass2.textContent = '대전 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/bitscale-1b2d1.appspot.com/o/navi%2F006.png?alt=media&token=0cbfc9e0-0472-48cb-908d-10cd427776f2'
    }
    if(text === '울산') {
        $(pass1).append('울산 전 지역')
        pass2.textContent = '울산 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/bitscale-1b2d1.appspot.com/o/navi%2F007.png?alt=media&token=f5c8d13d-c9b6-4da5-be6e-d6ccc3da9797'
    }
    if(text === '경기') {
        $(pass1).append('경기 전 지역')
        pass2.textContent = '경기 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/bitscale-1b2d1.appspot.com/o/navi%2F008.png?alt=media&token=2b37bb98-53a1-44b2-a637-55fd0e10d2a9'
    }
    if(text === '강원') {
        $(pass1).append('강원 전 지역')
        pass2.textContent = '강원 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/bitscale-1b2d1.appspot.com/o/navi%2F009.png?alt=media&token=58948dcd-55ae-4685-baee-3a7ec32b92f5'
    }
    if(text === '충북') {
        $(pass1).append('충북 전 지역')
        pass2.textContent = '충북 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/bitscale-1b2d1.appspot.com/o/navi%2F010.png?alt=media&token=0520bc53-7019-4c18-8224-53308dff8bfa'
    }
    if(text === '충남') {
        $(pass1).append('충남 전 지역')
        pass2.textContent = '충남 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/bitscale-1b2d1.appspot.com/o/navi%2F011.png?alt=media&token=f8949bbb-b090-434e-8577-5aea60343d74'
    }
    if(text === '전북') {
        $(pass1).append('전북 전 지역')
        pass2.textContent = '전북 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/bitscale-1b2d1.appspot.com/o/navi%2F012.png?alt=media&token=624744a3-fd07-485a-b551-7eac3d13436d'
    }
    if(text === '전남') {
        $(pass1).append('전남 전 지역')
        pass2.textContent = '전남 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/bitscale-1b2d1.appspot.com/o/navi%2F013.png?alt=media&token=2ba880e3-2e37-462c-9d51-caa9ca53a1c9'
    }
    if(text === '경북') {
        $(pass1).append('경북 전 지역')
        pass2.textContent = '경북 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/bitscale-1b2d1.appspot.com/o/navi%2F014.png?alt=media&token=96c7267e-b4c9-4f13-a95d-18c4b8cdae43'
    }
    if(text === '경남') {
        $(pass1).append('경남 전 지역')
        pass2.textContent = '경남 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/bitscale-1b2d1.appspot.com/o/navi%2F015.png?alt=media&token=69b1eb77-af41-41ae-be81-f8150598a0b3'
    }
    if(text === '세종') {
        $(pass1).append('세종 전 지역')
        pass2.textContent = '세종 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/bitscale-1b2d1.appspot.com/o/navi%2F016.png?alt=media&token=d0b5724f-67a9-46a5-b640-2ef658f5628a'
    }
    if(text === '제주') {
        $(pass1).append('제주 전 지역')
        pass2.textContent = '제주 전 지역을'
        passimg.src = 'https://firebasestorage.googleapis.com/v0/b/bitscale-1b2d1.appspot.com/o/navi%2F017.png?alt=media&token=319c3343-25bd-43ee-812f-8c7fbde64835'
    }
}