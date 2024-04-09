import Content from "./content"

const Footer = () => {
    return <footer className="footer-1 bg-gray-100 py-8 sm:py-12">
        <div className="container mx-auto px-4">
            <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 justify-center">
                <div className="px-4 sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/5">
                    <Content title="Tuyến đường" des="Xe đi Buôn Mê Thuột từ Sài Gòn" />
                    <Content title="" des="Xe đi Vũng Tàu từ Sài Gòn" />
                    <Content title="" des="Xe đi Nha Trang từ Sài Gòn" />
                    <Content title="" des="Xe đi Đà Lạt từ Sài Gòn" />
                    <Content title="" des="Xe đi Sapa từ Hà Nội" />
                    <Content title="" des="Xe đi Hải Phòng từ Hà Nội" />
                    <Content title="" des="Xe đi Vinh từ Hà Nội" />
                </div>
                <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-[38%]">
                    <Content title="Xe Limousine" des="Xe Limousine đi Đà Lạt từ Sài Gòn" />
                    <Content title="" des="Xe Limousine đi Vũng Tàu từ Sài Gòn" />
                    <Content title="" des="Xe Limousine đi Nha Trang từ Sài Gòn" />
                    <Content title="" des="Xe Limousine đi Hải Phòng từ Hà Nội" />
                    <Content title="" des="Xe Limousine đi Hạ Long từ Hà Nội" />
                    <Content title="" des="Xe Limousine đi Sapa Từ Hà Nội" />
                    <Content title="" des="Xe Limousine đi Quảng Ninh từ Hà Nội" />
                </div>
                <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/5">
                    <Content title="Tin tức" des="Xe giường nằm Limousine – đỉnh cao mới của ngành xe khách" />
                    <Content title="" des="Xe limousine đi Vũng Tàu: Tổng hợp top 6 xe chất lượng cao" />
                    <Content title="" des="Review xe limousine đi Đà Lạt: những câu hỏi thường gặp" />
                    <Content title="" des="Xe limousine đi Sapa: Tổng hợp top các hãng xe chất lượng cao" />
                </div>
            </div>
            <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 justify-center">
                <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/5">
                    <Content title="Bến xe" des="Bến xe Miền Đông" />
                    <Content title="" des="Bến xe Trung tâm Đà Nẵng" />
                    <Content title="" des="Bến xe Gia Lâm" />
                    <Content title="" des="Bến xe Mỹ Đình" />
                    <Content title="" des="Bến xe An Sương" />
                    <Content title="" des="Bến xe Nước Ngầm" />
                    <Content title="" des="Bến xe Miền Tây" />
                </div>
                <div className=" flex px-4 sm:w-1/2 md:w-1/4 xl:w-[58%] justify-around">
                    <div className="">
                        <p className="text-xl font-bold">Nhà xe</p>
                        <Content title="" des="Xe Liên Hưng" />
                        <Content title="" des="Xe Long Vân Limousine" />
                        <Content title="" des="Xe Vie Limousine" />
                        <Content title="" des="Xe Cúc Tùng" />
                        <Content title="" des="Xe An Phú Buslines" />
                        <Content title="" des="Xe Bằng Phấn" />
                        <Content title="" des="Xe Hà Lan" />
                        <Content title="" des="Xe 36 Limousine" />
                    </div>
                    <div className="">
                        <p className="h-[28px]"></p>
                        <Content title="" des="Xe Liên Hưng" />
                        <Content title="" des="Xe Long Vân Limousine" />
                        <Content title="" des="Xe Vie Limousine" />
                        <Content title="" des="Xe Cúc Tùng" />
                        <Content title="" des="Xe An Phú Buslines" />
                        <Content title="" des="Xe Bằng Phấn" />
                        <Content title="" des="Xe Hà Lan" />
                        <Content title="" des="Xe 36 Limousine" />
                    </div>
                    <div className="">
                        <p className="h-[28px]"></p>
                        <Content title="" des="Xe Liên Hưng" />
                        <Content title="" des="Xe Long Vân Limousine" />
                        <Content title="" des="Xe Vie Limousine" />
                        <Content title="" des="Xe Cúc Tùng" />
                        <Content title="" des="Xe An Phú Buslines" />
                        <Content title="" des="Xe Bằng Phấn" />
                        <Content title="" des="Xe Hà Lan" />
                        <Content title="" des="Xe 36 Limousine" />
                    </div>
                    <div className="">
                        <p className="h-[28px]"></p>
                        <Content title="" des="Xe Liên Hưng" />
                        <Content title="" des="Xe Long Vân Limousine" />
                        <Content title="" des="Xe Vie Limousine" />
                        <Content title="" des="Xe Cúc Tùng" />
                        <Content title="" des="Xe An Phú Buslines" />
                        <Content title="" des="Xe Bằng Phấn" />
                        <Content title="" des="Xe Hà Lan" />
                        <Content title="" des="Xe 36 Limousine" />
                    </div>
                </div>
            </div>
            <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 justify-center">
                <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-[19.5%]">
                    <Content title="Hỗ trợ" des="Hướng dẫn thanh toán" />
                    <Content title="" des="Quy chế Vexere.com" />
                    <Content title="" des="Chính sách bảo mật thông tin" />
                    <Content title="" des="Chính sách bảo mật thanh toán" />
                    <Content title="" des="Chính sách và quy trình giải quyết tranh chấp, khiếu nại" />
                    <Content title="" des="Câu hỏi thường gặp" />
                    <Content title="" des="Tra cứu đơn hàng" />
                </div>
                <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-[19.5%]">
                    <Content title="Về chúng tôi" des="Phần mềm đại lý" />
                    <Content title="" des="Quy chế Vexere.com" />
                    <Content title="" des="Giới Thiệu Vexere.com" />
                    <Content title="" des="Tuyển dụng" />
                    <Content title="" des="Tin tức" />
                    <Content title="" des="Liên hệ" />
                    <div className="mt-8">
                        <Content title="Chứng Nhận" des="" />
                    </div>
                </div>
                <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-[19.5%]">
                    <Content title="Đối tác thanh toán" des="" />
                </div>
                <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-[19.5%]">
                    <Content title="Đối tác thanh toán" des="" />
                    <img src="./qr.png" alt="" />
                </div>
            </div>
        </div>
        <div className="container mx-auto px-4 text-center">
            <div>Công ty TNHH Thương Mại Dịch Vụ Vexere</div>
            <div>Địa chỉ đăng ký kinh doanh: 8C Chữ Đồng Tử, Phường 7, Quận Tân Bình, Thành Phố Hồ Chí Minh, Việt Nam</div>
            <div>Địa chỉ <a href="">Lầu 2, tòa nhà H3 Circo Hoàng Diệu, 384 Hoàng Diệu, Phường 6, Quận 4, Tp. Hồ Chí Minh, Việt Nam</a></div>
            <div>Giấy chứng nhận ĐKKD số 0315133726 do Sở KH và ĐT TP. Hồ Chí Minh cấp lần đầu ngày 27/6/2018</div>
            <div>Bản quyền © 2020 thuộc về Vexere.Com</div>
        </div>
    </footer>
}

export default Footer