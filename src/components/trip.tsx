const Trip = (props: { img: string, title: string, price: number, time: string, xp: string, end: string, kt: string }) => {
    return <div className="p-5 w-[70%] float-right">
        <div className="product-card">
            <a
                href="#"
                className="rounded-lg p-4 shadow-sm shadow-indigo-100 flex flex-col sm:flex-row bg-white"
            >
                <img
                    alt=""
                    src={props.img}
                    className="h-48 w-48 sm:h-auto sm:w-60 rounded-md"
                />
                <div className="mt-4 sm:mt-0 sm:ml-4 flex-grow flex justify-between items-start">
                    <div className="flex flex-col items-start sm:w-1/2 h-52 justify-between">
                        <div>
                            <dd className="font-medium">{props.title}</dd>
                        </div>
                        <div>
                            <p>{props.time}-<span>{props.xp}</span></p>
                            <p>{props.end}-<span>{props.kt}</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-4 sm:gap-8 text-xs sm:w-1/2">
                        <div>
                            <dd className="text-[#2474E5] text-xl">Từ {props.price}đ</dd>
                        </div>
                        <div>
                            <dd className="text-sm text-gray-500">Giảm giá 10%</dd>
                        </div>
                        <div>
                            <dd className="text-sm text-gray-500">Còn 11 chỗ trống</dd>
                        </div>
                        <button className="bg-[#FFC700] leading-7">Chọn chuyến</button>
                        <div>
                            <dd className="text-sm text-gray-500">Không cần thanh toán trước</dd>
                        </div>
                    </div>
                </div>
            </a>
        </div>



    </div>

}
export default Trip