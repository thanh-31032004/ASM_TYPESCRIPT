const Content = (props: { des: string, title: string }) => {
    return <div >
        <h5 className="text-xl font-bold mb-6">{props.title}</h5>
        <ul className="list-none footer-links">
            <li className="mb-2">
                <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                    {props.des}
                </a>
            </li>

        </ul>
    </div>



}
export default Content