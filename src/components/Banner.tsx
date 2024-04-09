import { useState } from "react";
import { getTrips } from "../services/trip.api";
import Search from "./list";
import Navigation from "./Navigation";
import { ITrip } from "../interfaces";

import { useNavigate } from "react-router-dom";

const Banner = () => {
    const [trips, setTrips] = useState<ITrip[]>([]);
    const navigate = useNavigate();

    const handleSearch = async (query: string) => {
        try {
            console.log(query);
            const { data } = await getTrips(query);
            setTrips(data);
            navigate("/trip", { state: { data: data } }); // Truyền dữ liệu trong state khi chuyển hướng
        } catch (error) {
            console.error("Lỗi khi tìm kiếm chuyến đi:", error);
        }
    };
    return <>
        <section className="relative bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8 flex-col">
                <div className="w-full text-center">
                    <h2 className="text-white text-2xl">Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ</h2>
                    <Search onSearch={handleSearch} />
                </div>
            </div>
            <div className="h-16 flex bg-[#000000]/50 justify-evenly">
                <ul className="flex items-center gap-6 text-sm">
                    <Navigation img="./logo1.png" title="Chắc chắn có chỗ" />
                    <Navigation img="./logo2.png" title="Hỗ trợ 24/7" />
                    <Navigation img="./logo3.png" title="Nhiều ưu đãi" />
                    <Navigation img="./logo4.png" title="Thanh toán đa dạng" />

                </ul>
            </div>
        </section>
    </>
}

export default Banner;