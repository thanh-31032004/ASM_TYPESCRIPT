
const Select = () => {
    return <div>
        <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full text-gray-700"
            required
        >
            <option value="">--Chọn--</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Hải Phòng">Hải Phòng</option>
            <option value="Quảng bình">Quảng bình</option>
            <option value="hcm">Tp Hồ Chí Minh</option>
            <option value="nt">Nha trang</option>
            <option value="pt">Phan thiết</option>
            <option value="vt">Vũng tàu</option>
        </select>
    </div>
}

export default Select;