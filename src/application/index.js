import "../styles/index.scss"

window.addEventListener("DOMContentLoaded", function (evt) {
    console.log("Dom Ready !")
})

/**
 * VARIABLES
 */
const myWebSocket = new WebSocket(`${document.body.dataset.scheme == 'http' ? 'ws': 'wss'}://${document.body.dataset.host}/ws/example/`)

/**
 * FUNCTIONS
 */
/**
 * Send data to WebSockets server
 * @param {string} message
 * @param {WebSocket} webSocket
 * @return {void}
 */
 function sendData(message, webSocket) {
    webSocket.send(JSON.stringify(message));
}

/**
 * Send message to update page
 * @param {Event} event
 * @return {void}
 */

function handleClickNavigation(event) {
    event.preventDefault()
    sendData({
        action: 'Change page',
        data: {
            page: event.target.dataset.target
        }
    }, myWebSocket)
}

/**
 * Send message to Websockets server to change the page
 * @param {WebSocket} WebSocket
 * @return {void}
 */

function setEventsNavigation(webSocket) {
    // Navigation
    document.querySelectorAll('.nav__link--page').forEach(link => {
        link.removeEventListener('click', handleClickNavigation, false)
        link.addEventListener('click', handleClickNavigation, false)
    })
}

/**
 * 
 */

myWebSocket.addEventListener("message", function (event) {
    // Parse the data received
    const data = JSON.parse(event.data)
    // Renders the HTML receviced from th e consumer
    const selector = document.querySelector(data.selector)
    selector.innerHTML = data.html

    /**
     * Reassigns the events of the newly rendered HTML
     */
    updateEvents()
})

/**
 * Update events in every page
 * @return {void}
 */

function updateEvents() {
    // Nav
    setEventsNavigation(myWebSocket)
}

/*
    INITIALIZATION
*/
updateEvents()