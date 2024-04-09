import axios from 'axios'
import { useEffect, useState } from 'react'
import { ITrip } from '../../interfaces'
import { Link, } from 'react-router-dom'


const History = () => {
    const [trips, setTrips] = useState<ITrip[]>([])
    const getTrips = async () => {
        const { data } = await axios.get("http://localhost:3000/trips?_expand=")
        setTrips(data)
    }

    useEffect(() => {
        getTrips()
    }, [])

    console.log(trips);
    return <div>
        <h1 className="text-2xl text-center font-semibold">Lịch sử chuyến đi</h1>

        {trips.map((trip) => <Trip key={trip.id} data={trip} />)}
    </div>
}

export default History

const Trip = (props: { data: ITrip }) => {

    return <>
        {props.data.isBooked == 1 && (
            <article className="rounded-xl border-2 border-gray-100 bg-white w-[60%] mb-5">
                <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-4">

                    <div>
                        <h3 className="font-semibold sm:text-xl mt-4">
                            <a href="#" className="hover:underline">Mã chuyến :{props.data.id}</a>
                        </h3>
                        <h3 className="font-nomal sm:text-xl mt-2">
                            <Link to={"/admin/trips/" + props.data.id} className="hover:underline">{props.data.busHouseId}</Link>
                        </h3>
                        <div className="mt-4">
                            <h3 className="line-clamp-2 text-base font-semibold float-left lg-">
                                Số ghế còn trống :
                            </h3>
                            <span> {props.data.seats}</span>
                        </div>
                        <div className="mt-4">
                            <h3 className="line-clamp-2 text-base font-semibold float-left lg-">
                                Khởi hành :
                            </h3>
                            <span>{props.data.startTime}</span>
                        </div>
                        <div className="mt-4">
                            <h3 className="line-clamp-2 text-base font-semibold float-left lg-">
                                Điểm đi :
                            </h3>
                            <span>{props.data.fromStation}</span>
                        </div>

                    </div>
                    <div className="">

                        <Link to="/admin/trips/history" className="contents"><button className=" cursor-pointer group relative flex gap-1.5  px-8 py-2 bg-black bg-opacity-80 text-[#f1f1f1] rounded-xl hover:bg-opacity-70 transition font-semibold shadow-md ml-64 text-xs">

                            Lịch sử chuyến

                        </button>
                        </Link>

                        <div className="mt-6 ml-28">
                            <h3 className="line-clamp-2 text-base font-semibold float-left lg-">
                                SĐT Nhà xe :
                            </h3>
                            <span>10</span>
                        </div>
                        <div className="mt-14 ml-28">
                            <h3 className="line-clamp-2 text-base font-semibold float-left lg-">
                                Bến xe :
                            </h3>
                            <span>{props.data.stations}</span>
                        </div>
                        <div className="mt-4 ml-28">
                            <h3 className="line-clamp-2 text-base font-semibold float-left lg-">
                                Điểm đến :
                            </h3>
                            <span>{props.data.toStation}</span>
                        </div>

                    </div>
                </div>
            </article >
        )}
    </>
}
