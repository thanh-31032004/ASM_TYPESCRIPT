const Navigation = (props: { title: string, img: string }) => {
    return <li className="block">
        <a className=" text-gray-400 transition hover:text-gray-500/75 flex items-center" href="#">
            <img src={props.img} /> {props.title}
        </a>
    </li>


}

export default Navigation