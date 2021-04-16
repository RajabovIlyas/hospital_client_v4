import axios from "axios";

const API= axios.create({
    baseURL: "https://calm-garden-05859.herokuapp.com/api",
    responseType: "json"
});

export const patientAPI={
    async getAll() {
        return await API.get(`patient/`, )
            .then(res => res.data)
    },
    async create(data) {
        return await API.post(`patient/`, {...data})
            .then(res => res.data)
    },
}

export const doctorAPI={
    async getAll() {
        return await API.get(`doctor/`, )
            .then(res => res.data)
    },
    async create(data) {
        return await API.post(`doctor/`, {...data})
            .then(res => res.data)
    },
}

export const dentalTechnicianAPI={
    async getAll() {
        return await API.get(`dental_technician/`, )
            .then(res => res.data)
    },
    async create(data) {
        return await API.post(`dental_technician/`, {...data})
            .then(res => res.data)
    },
}
