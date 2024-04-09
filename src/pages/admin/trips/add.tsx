import { useForm, SubmitHandler } from 'react-hook-form'
import { postTrip } from '../../../services/trip.api'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'react';
import { IBusHouse } from '../../../interfaces';


type AddTripForm = {
    busHouseId: string,
    startTime: string,
    fromStation: string,
    toStation: string,
    seats: number,
    price: number,
    stations: string,

}

const AddTrip = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<AddTripForm>()
    const busHouses = useLoaderData() as IBusHouse[]
    const [stations, setStations] = useState<{ id: string, name: string, province: string }[]>([]);

    useEffect(() => {
        const fetchStations = async () => {
            try {
                const data = await (await fetch("http://localhost:3000/stations")).json()
                setStations(data);
            } catch (error) {
                console.error('Error fetching stations:', error);
            }
        };
        fetchStations();
    }, []);
    const onSubmit: SubmitHandler<AddTripForm> = async (data) => {
        try {
            await postTrip(data)
            navigate("/admin/trips")
        } catch {
            alert("Thêm mới thất bại")
        }
        // console.log(data);
    }

    return <form action="#" className="space-y-4 w-[80%]" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl text-center font-semibold">Thêm mới chuyến đi</h1>
        <Link to="/admin/trips/add" className="contents"><button className="mt-8 mb-8 cursor-pointer group relative flex gap-1.5 px-16 py-2 bg-black bg-opacity-80 text-[#f1f1f1] rounded-xl hover:bg-opacity-70 transition font-semibold shadow-md">

            Thêm mới nhà xe

        </button>
        </Link>
        <div>
            <p className="">
                Nhà xe
            </p>
            <select className='h-14 w-72 rounded-md border-2 border-gray-500/100' {...register("busHouseId", { required: "Dữ liệu bắt buộc" })}>
                {busHouses && busHouses.map(item => <option value={item.name}>{item.name}</option>)}

            </select>
            <p className='text-sm text-red-500'>{errors.busHouseId?.message}</p>
        </div>
        <div className="flex justify-between grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
                <p className="">
                    Thời gian bắt đầu
                </p>
                <input
                    className="h-14 w-72 rounded-md border-2 border-gray-500/100"
                    placeholder="Thời gian bắt đầu"
                    type="date"
                    min={new Date().toISOString().slice(0, -14)}
                    {...register("startTime", { required: "Dữ liệu bắt buộc" })}
                />
                <p className='text-sm text-red-500'>{errors.startTime?.message}</p>
            </div>
            <div>
                <p className="" >
                    Số ghế
                </p>
                <input
                    className="h-14 w-72 rounded-md border-2 border-gray-500/100"
                    placeholder="Điểm đi"
                    type="number"
                    {...register("seats", { required: "Dữ liệu bắt buộc" })}
                />
                <p className='text-sm text-red-500'>{errors.seats?.message}</p>
            </div>
            <div>
                <p className="" >
                    Giá
                </p>
                <input
                    className="h-14 w-72 rounded-md border-2 border-gray-500/100"
                    placeholder="Điểm đến"
                    type="number"
                    {...register("price", { required: "Dữ liệu bắt buộc" })}
                />
                <p className='text-sm text-red-500'>{errors.price?.message}</p>
            </div>
        </div>

        <div className="flex justify-between grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
                <p className="">
                    Bến xe
                </p>
                <select className='h-14 w-72 rounded-md border-2 border-gray-500/100' {...register("stations", { required: "Dữ liệu bắt buộc" })}>
                    {stations.map((station) => (
                        <option key={station.id} value={station.name}>{station.name}</option>
                    ))}
                </select>
                <p className='text-sm text-red-500'>{errors.stations?.message}</p>
            </div>
            <div>
                <p className="" >
                    Điểm đi
                </p>
                <input
                    className="h-14 w-72 rounded-md border-2 border-gray-500/100"
                    placeholder="Điểm đi"
                    type="text"
                    {...register("fromStation", { required: "Dữ liệu bắt buộc" })}
                />
                <p className='text-sm text-red-500'>{errors.fromStation?.message}</p>
            </div>
            <div>
                <p className="" >
                    Điểm đến
                </p>
                <input
                    className="h-14 w-72 rounded-md border-2 border-gray-500/100"
                    placeholder="Điểm đến"
                    type="text"
                    {...register("toStation", { required: "Dữ liệu bắt buộc" })}
                />
                <p className='text-sm text-red-500'>{errors.toStation?.message}</p>
            </div>
        </div>
        <div className="mt-4 float-right">

            <button
                type="submit"
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
                Thêm mới chuyến đi
            </button>
        </div>
    </form>
}

export default AddTrip