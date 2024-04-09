import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import { IBusHouse, ITrip } from "../../../interfaces";
import { useForm, SubmitHandler } from "react-hook-form"
import { putTrip } from "../../../services/trip.api";
import { useEffect, useState } from "react";

type AddTripForm = {
    busHouseId: string,
    startTime: string,
    fromStation: string,
    toStation: string,
    seats: number,
    price: number,
    stations: string,
}

const UpdateTrip = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const { busHouses, trip } = useLoaderData() as { busHouses: IBusHouse[], trip: ITrip };
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
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddTripForm>({
        defaultValues: trip
    })
    const onSubmit: SubmitHandler<AddTripForm> = async (data) => {
        try {
            if (id) {
                putTrip(id, data)

            }

            navigate("/admin/trips")
        } catch {
            alert("Thêm mới chuyến đi thất bại")
        }
    }
    return <form action="#" className="space-y-4 w-[80%]" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl text-center font-semibold">Sửa chuyến đi</h1>

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
                    {stations && stations.map(item => <option value={item.name}>{item.name}</option>)}
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
                Cập nhật chuyến đi
            </button>
        </div>
        {/* <h1 className="text-2xl text-green-500">Thêm mới chuyến đi</h1>
        <div>
            <label className="sr-only" htmlFor="name">
                Nhà xe
            </label>
<select {...register("busHouseId", { required: "Dữ liệu bắt buộc" })}>
                {busHouses && busHouses.map(item => <option key={item.id} value={item.name}>{item.name}</option>)}
            </select>
            <p className="text-red-500 text-sm italic">{errors.busHouseId?.message}</p>
        </div>
        <div>
            <label className="sr-only" htmlFor="name">
                Thời gian khởi hành
            </label>
            <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Thời gian khởi hành"
                type="date"
                {...register("startTime")}
            />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
                <label className="sr-only" htmlFor="email">
                    Điểm đi
                </label>
                <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Điểm đi"
                    type="text"
                    {...register("fromStation", { required: "Dữ liệu bắt buộc" })}
                />
                <p className="text-red-500 text-sm italic">{errors.fromStation?.message}</p>
            </div>
            <div>
                <label className="sr-only" htmlFor="phone">
                    Điểm đến
                </label>
                <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Điểm đến"
                    type="text"
                    {...register("toStation")}
                />
            </div>
        </div>

        <div>
            <label className="sr-only" htmlFor="phone">
                Bến xe
            </label>
            <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Bến xe"
                type="text"
                {...register("stations")}
            />
        </div>
        <div>
            <label className="sr-only" htmlFor="phone">
                Số ghế
            </label>
            <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Số ghế"
                type="number"
                {...register("seats")}
            />
        </div>
        <div>
            <label className="sr-only" htmlFor="phone">
                Giá
            </label>
            <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Giá"
                type="number"
                {...register("price")}
            />
        </div>
        <div className="mt-4">
            <button
                type="submit"
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
Thêm mới chuyến xe
            </button>
        </div> */}
    </form>

}

export default UpdateTrip