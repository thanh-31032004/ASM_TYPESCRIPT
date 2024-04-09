import instance from "./api";

const getBusHouses = async () => {
    const data = await instance.get("/busHouses")
    return data
}

export {
    getBusHouses
}