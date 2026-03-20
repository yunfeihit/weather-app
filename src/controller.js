import { renderMainPage, getLocationInputValue, getRenderElements } from "./dom";

const apiKey = 'XYDPNER7DTTCSZRQ8VZXBG3H4'
const defaultLocation = 'tianjin';

async function getWeatherDataOfLocation(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`);
        console.log('the response is:', response);
        const data = await response.json();
        //console
        console.log('the Raw data is fetched:', data);
        return {
            location: data.resolvedAddress,
            time: data.days[0].datetime,
            temperature: data.days[0].temp,
            description: data.days[0].conditions,
            feelsLike: data.currentConditions.feelslike,
            humidity: data.days[0].humidity,
            wind: data.days[0].windspeed
        };
    } catch(err) {
        console.log(err);
        return null;
    }
}

function renderAPIResult(APIResultObject) {
    const theRenderElementsObject = getRenderElements();

    if (APIResultObject) {
        theRenderElementsObject.location.textContent = APIResultObject.location;
        theRenderElementsObject.time.textContent = APIResultObject.time;
        theRenderElementsObject.temperature.textContent = APIResultObject.temperature;
        theRenderElementsObject.description.textContent = APIResultObject.description;
        theRenderElementsObject.feelsLike.textContent = APIResultObject.feelsLike;
        theRenderElementsObject.humidity.textContent = APIResultObject.humidity;
        theRenderElementsObject.wind.textContent = APIResultObject.wind;
    
        console.log('the API data is rendered!');
    } else {
        for (const [key, value] of Object.entries(theRenderElementsObject)) {
            value.textContent = 'NA';
        }
    }
}

async function handleFormSubmit(event) {
    //stop default behavior, make 'click' and 'press enter' both work to submit form
    event.preventDefault()
    //show weather API result on the container
    const theLocation = getLocationInputValue();
    const theWeatherData = await getWeatherDataOfLocation(theLocation);
    //log
    console.log('The weather data is successfully fetched:', theWeatherData);
    //render API result
    renderAPIResult(theWeatherData);
}


async function loadPage() {
    const theDefaultData = await getWeatherDataOfLocation(defaultLocation);
    renderMainPage(handleFormSubmit);
}


export {loadPage};