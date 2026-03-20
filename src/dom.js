
function bindFormSubmit(handler) {
    const submitForm = document.querySelector('#location-submit-form');
    submitForm.addEventListener('submit', handler)
}

function renderMainPage(handler) {
    bindFormSubmit(handler);    
}

function getLocationInputValue() {
    const locationInput = document.querySelector('#location-input'); 
    const theLocation = locationInput.value;
    return theLocation;
}

//directlly get the textcontent of them
function getRenderElements() {
    return {
        location: document.querySelector('#location-result'),
        time: document.querySelector('#time-result'),
        temperature: document.querySelector('#temperature-result'),
        description: document.querySelector('#description-result'),
        feelsLike: document.querySelector('#feelsLike-result'),
        humidity: document.querySelector('#humidity-result'),
        wind: document.querySelector('#wind-result')
    }
}

export {renderMainPage, getLocationInputValue, getRenderElements};