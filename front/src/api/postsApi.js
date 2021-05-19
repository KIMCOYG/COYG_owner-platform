import axios from "axios";

export const getEvents = async () => {
    // event + image
    const response = await axios.get(`http://localhost:5000/event/read-all`)
    return response.data;
}

export const getScrapEvents = async () => {
    // event + image + scrap
    const response = await axios.get(`http://localhost:5000/event/read-all`)
    return response.data;
}

export const getShops = async () => {
    // shopid , shopname
    const response = await axios.get(`http://localhost:5000/event/read-all`)
    return response.data;
}

export const getCategories = async () => {
    // category + image
    const response = await axios.get(`http://localhost:5000/event/read-all`)
    return response.data;
}

export const getEventById = async id => {
    // event + shop + scrap
    const response = await axios.get(`http://localhost:5000/event/read/${id}`)
    console.log("event",response.data)
    return response.data;
}

export const getShopById = async id => {
    const response = await axios.get(`http://localhost:5000/shop/read/${id}`)
    return response.data;
}

export const getUserById = async id => {
    const response = await axios.get(`http://localhost:5000/user/read/${id}`)
    return response.data;
}