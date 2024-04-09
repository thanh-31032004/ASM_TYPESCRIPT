// Props: Là một đối tượng đặc biệt (không thể bị thay đổi)
// được truyền từ cha xuống con
// Là để tái sử dụng code giữa các component
const Button = (props: { title: string }) => {

    return <a
        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#0D2E59] shadow"
        href="#"
    >
        {props.title}
    </a>
}

export default Button