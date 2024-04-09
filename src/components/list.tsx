
import Navigation from "./Navigation"

import moment from "moment"
import { useForm, SubmitHandler } from 'react-hook-form'


type SearchForm = {

    toStation: string,
    fromStation: string,
    startTime: string
}
const Search = (props: { onSearch: (query: string) => void }) => {
    const { register, formState: { errors }, handleSubmit } = useForm<SearchForm>()
    const onSubmit: SubmitHandler<SearchForm> = async (data) => {
        const query = new URLSearchParams(data)
        props.onSearch(query.toString())
    }

    return <div className="bg-white">
        <ul className="flex items-center gap-6 text-sm justify-center m-2 overflow-x-auto">
            <Navigation img="./logo8.png" title="Xe khách " />
            <Navigation img="./logo7.png" title="Máy bay" />
            <Navigation img="./logo6.png" title="Tàu hỏa" />
            <Navigation img="./logo5.png" title="Thuê xe" />
        </ul>
        <form action="" onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 flex flex-col sm:flex-row gap-4 justify-center" >
            <div className="flex flex-col sm:flex-row sm:w-3/5 justify-between items-center">
                <div className="flex justify-between items-center w-44">
                    <div>
                        <img src="./img5.png" alt="" />
                    </div>
                    <div>
                        <label className="block text-gray-900 text-left">Điểm xuất phát</label>
                        <select

                            id="HeadlineAct"
                            className="mt-1.5 w-full text-gray-700"
                            required
                            {...register("fromStation")}
                        >
                            <option value="">--Chọn--</option>
                            <option value="Hà Nội">Hà Nội</option>
                            <option value="Hải Phòng">Hải Phòng</option>
                            <option value="Quảng bình">Quảng bình</option>
                            <option value="Tp Hồ Chí Minh">Tp Hồ Chí Minh</option>
                            <option value="Nha trang">Nha trang</option>
                            <option value="Phan thiết">Phan thiết</option>
                            <option value="Vũng tàu">Vũng tàu</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-between items-center w-44">
                    <div>
                        <img src="./img6.png" alt="" />
                    </div>
                    <div>
                        <label className="block text-gray-900 text-left">Điểm đến</label>
                        <select
                            id="HeadlineAct"
                            className="mt-1.5 w-full text-gray-700"
                            required
                            {...register("toStation")}

                        >
                            <option value="">--Chọn--</option>
                            <option value="Hà Nội">Hà Nội</option>
                            <option value="Hải Phòng">Hải Phòng</option>
                            <option value="Quảng bình">Quảng bình</option>
                            <option value="Tp Hồ Chí Minh">Tp Hồ Chí Minh</option>
                            <option value="Nha trang">Nha trang</option>
                            <option value="Phan thiết">Phan thiết</option>
                            <option value="Vũng tàu">Vũng tàu</option>
                        </select>
                    </div>
                </div>
                <div className="p-1">
                    <Navigation title="Ngày đi" img="./img7.png" />
                    <input {...register("startTime")} min={moment().format("YYYY-MM-DD")} className="p-1 outline-none border-none w-full" type="date" id="username" />
                </div>
                <Navigation title="Thêm ngày về" img="" />
            </div>
            <button type="submit"
                className="rounded-md bg-[#FFD333] px-5 py-2.5 text-sm font-medium text-black"
            >
                Tìm kiếm
            </button>
        </form>
    </div>
}
export default Search

