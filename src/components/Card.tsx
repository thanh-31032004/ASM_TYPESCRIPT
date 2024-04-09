const Card = (props: { img: string, title: string, price: number, listprice: number }) => {
    return <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
        <img
            alt=""
            src={props.img}
            className="h-32 w-full rounded-md object-cover"
        />
        <div className="mt-2">
            <dl>
                <div>
                    <dt className="sr-only"></dt>
                    <dd className="font-medium">{props.title}</dd>
                </div>
                <div>
                    <dt className="sr-only"></dt>
                    <dd className="text-sm text-gray-500">Từ {props.price}đ <span className="line-through">{props.listprice}đ</span></dd>
                </div>
            </dl>
        </div>
    </a>

}

export default Card