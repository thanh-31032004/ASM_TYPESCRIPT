import Banner from "../components/Banner"
import Card from "../components/Card"
import Header from "../components/Header"
import Footer from "../components/footer"

const HomePage = () => {
    return <div>
        <Header />
        <Banner />
        <div className="mt-6 mb-6">
            <h1 className="ml-4 sm:ml-44 text-xl text-center sm:text-left">Tuyến đường phổ biến</h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Card img="./img1.png" title="Sài Gòn - Nha Trang" price={200000} listprice={400000} />
                <Card img="./img2.png" title="Hà Nội - Hải Phòng" price={100000} listprice={0} />
                <Card img="./img3.png" title="Sài Gòn - Đà Lạt" price={200000} listprice={0} />
                <Card img="./img4.png" title="Sài Gòn - Phan Thiết" price={150000} listprice={0} />
            </div>
        </div>
        <Footer />
    </div>
}

export default HomePage