const weather = document.querySelector(".js-weather");
const API_KEY = "1684e7a72f33d056e3bccb08769f6063";     // open weather 로 API 주소를 받아옴
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        })
        .then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature}ºc / ${place}`;
        });
        
        //fetch() 함수는 첫 번째 인자로 url, 두 번째 인자로 옵션 객체를 받는다
        // 반환된 객체가 API 호출이 성공했을 경우 응답(response) 객체를 반환
        // response에서 JSON Data로 가져온 것을 보류하지 않고 바로 JSON Data를 출력 (F12를 통해서 가져온 JSON Data)

        // temperature, place를 각각 JSON Data로 설정
        // weather.innerText에서 `~` 사이에 $으로 각각 인자화해서 html에 출력
}

// 
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    
    // COORDS에 있는 coordsObj의 값을 string 값으로 localStorage에 가져온다
}

// 정보를 가져오는 것에 대해 성공했을 경우
function handleGeoSucces(position){
    const latitude = position.coords.latitude;     // 위도
    const longitude = position.coords.longitude;   // 경도
    const coords = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coords);
    getWeather(latitude, longitude);

    // position.coords.latitude 현재 위치의 위도
    // position.coords.longitude 현재 위치의 경도
    // 위도와 경도의 정보를 저장
    // 현재 위도와 경도를 기준으로 날씨 정보를 가져옴
}

// 정보를 가져오는 것에 대해 실패했을 경우
function handleGeoError(){
    console.log("Can't access geo location");
}


// 위치와 경도의 정보가 없을 때 가져오는 것
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
    // geolocation.getCurrentPosition()는 장치의 현재 위치를 가져오는 것
    // navigator 객체는 브라우저에 대한 정보를 가지고 있는 객체
}

function loadCords(){
    const loadCords = localStorage.getItem(COORDS);
    if(loadCords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }

    // loadCords()를 호출하여 localStorage에 정보를 가져옴
    // 만약 loadCords의 정보가 없다면 askForcoords를 호출하여 위도와 경도를 가져옴
    // loadCords의 정보가 있다면 parseCoords의 정보를 JSON.parse를 이용해서 문자열을 객체로 변환하여
    // 날씨 정보를 가져옴(getWeather)
}

function init(){
    loadCords();
}

init();