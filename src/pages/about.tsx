
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Footer from "../components/footer"
import Radio from "../components/radio"
import { ITrip } from "../interfaces"
import { getTrips } from "../services/trip.api"
import Search from "../components/list"
import { useLocation } from "react-router-dom"

const AboutPage = () => {
    const [trips, setTrips] = useState<ITrip[]>([]);
    const location = useLocation();


    useEffect(() => {

        if (location.state && location.state.data) {

            setTrips(location.state.data);
        }
    }, [location.state]);

    const handleSearch = async (query: string) => {
        console.log(query);
        const { data } = await getTrips(query)
        console.log({ data })
        setTrips(data)
    }
    return <div className="bg-gray-100 tex">
        <Header />
        <Search onSearch={handleSearch} />
        <div className="text-center flex justify-center mt-6">
            <div className="w-[75%] flex">
                <div className="bg-white mt-5 w-[28%] float-left h-max">
                    <div className="text-left m-5">Sắp xếp</div>
                    <div className="m-4">
                        <Radio title="Mặc định" />
                        <Radio title="Giờ đi sớm nhất" />
                        <Radio title="Giờ đi muộn nhất" />
                        <Radio title="Đánh giá cao nhất" />
                        <Radio title="Giá tăng dần" />
                        <Radio title="Giá giảm dần" />
                    </div>
                </div>
                <div className="w-[80%]">
                    {trips.map(item => <Ticket key={item.id} data={item} />)}
                </div>

            </div>
        </div>
        <Footer />

    </div>
}

export default AboutPage
const Ticket = (props: { data: ITrip }) => {
    return <div className="w-[80%] ml-16 mr-auto mb-5">
        <div className="bg-white border rounded-lg p-4 hover:drop-shadow-xl">
            <div className="min-h-[180px]">
                <div className="flex">
                    <div className="w-[150px] h-[150px] bg-cover bg-center bg-no-repeat mr-5">
                        <img className="h-full w-full object-center object-cover" src="/anh1.png" />
                    </div>
                    <div className="min-h-[150px]"> {/* style="width: calc(100% - 150px);"> */}
                        <div className="flex items-center text-base font-bold">
                            <div className="mr-4">
                                {props.data.busHouseId}
                            </div>
                        </div>
                        <div className="flex text-sm text-gray-500 my-4">
                            Limousine 11 chỗ <i className="fa-solid fa-shield-heart mx-2 text-sm text-gray-500" /> Tài trợ
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center ">
                                <span className="text-xl font-semibold">1</span><span className="mx-1">•</span><span>{props.data.fromStation}</span>
                            </div>
                            <div className="text-base text-gray-500">1h30m</div>
                            <div className="flex items-center text-gray-500">
                                <span className="text-xl font-semibold">15:00m</span><span className="mx-1">•</span><span>{props.data.toStation}</span>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[150px] flex-col flex justify-between items-end grow  ">
                        <div className="text-xl leading-none font-bold text-blue-600">{props.data.price}</div>
                        <div className="flex items-center leading-none text-sm text-gray-500 px-2 border-green-500 border rounded-lg">
                            <span>Giảm 20%</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                            Còn<span className="mx-1">{props.data.seats}</span>chỗ trống
                        </div>
                        <div>
                            <button className="rounded bg-yellow-400 hover:bg-blue-500 py-2 px-4">Chọn chuyến</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-2 text-base font-bold">
                    KHÔNG CẦN THANH TOÁN TRƯỚC
                </div>
            </div>
        </div>
    </div>
}
