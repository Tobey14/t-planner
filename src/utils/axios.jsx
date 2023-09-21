import axios from "axios";

const customFetch = axios.create({
    baseURL: 'http://34.207.212.10:8000/',
    // timeout: 30000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": "Wl4N6W9GmqI8YgCzxJ2Td3oRAc1YmX1TLwIfDiub5FuhX5xbsh84iwHORxFcHC28"
        // "Content-type": "multipart/form-data",
    }
});

export default customFetch;