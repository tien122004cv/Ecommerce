import { assets } from "../assets/assets"

export default function NewArrivals() {
    return (
        <div className="w-10/12 mx-auto my-10">
            <p className="text-center text-3xl font-bold">NEW ARRIVALS</p>
            <div className="py-8 grid grid-cols-4 gap-5">
                <div className="flex flex-col gap-2">
                    <div className="bg-[#F4F5F0] rounded-2xl overflow-hidden">
                        <img src={assets.ao} alt="" className="w-full h-full mix-blend-multiply object-cover" />
                    </div>
                    <div>
                        <p className="font-semibold">T-shirt with Tape Details</p>
                        <div className="flex items-center gap-1">
                            <img src={assets.plump_star} alt="" className="w-3" />
                            <img src={assets.plump_star} alt="" className="w-3" />
                            <img src={assets.plump_star} alt="" className="w-3" />
                            <img src={assets.plump_star} alt="" className="w-3" />
                            <img src={assets.flawed_star} alt="" className="w-3" />
                            <p className="text-sm">4.5/<span className="opacity-50">5</span></p>
                        </div>
                        <strong className="text-xl">$120</strong>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="bg-[#F4F5F0] rounded-2xl overflow-hidden">
                        <img src={assets.ao} alt="" className="w-full h-full mix-blend-multiply object-cover" />
                    </div>
                    <div>
                        <p className="font-semibold text-ellipsis overflow-hidden whitespace-nowrap cursor-pointer">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia labore perferendis architecto beatae voluptas quam consectetur fugiat. Quidem, impedit itaque iste, labore illum asperiores, quas officia neque quibusdam earum illo!</p>
                        <div className="flex items-center gap-1">
                            <img src={assets.plump_star} alt="" className="w-3" />
                            <img src={assets.plump_star} alt="" className="w-3" />
                            <img src={assets.plump_star} alt="" className="w-3" />
                            <img src={assets.plump_star} alt="" className="w-3" />
                            <img src={assets.flawed_star} alt="" className="w-3" />
                            <p className="text-sm">4.5/<span className="opacity-50">5</span></p>
                        </div>
                        <strong className="text-xl">$120</strong>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="bg-[#F4F5F0] rounded-2xl overflow-hidden">
                        <img src={assets.ao} alt="" className="w-full h-full mix-blend-multiply object-cover" />
                    </div>
                    <div>
                        <p className="font-semibold">T-shirt with Tape Details</p>
                        <div className="flex items-center gap-1">
                            <img src={assets.plump_star} alt="" className="w-3" />
                            <img src={assets.plump_star} alt="" className="w-3" />
                            <img src={assets.plump_star} alt="" className="w-3" />
                            <img src={assets.plump_star} alt="" className="w-3" />
                            <img src={assets.flawed_star} alt="" className="w-3" />
                            <p className="text-sm">4.5/<span className="opacity-50">5</span></p>
                        </div>
                        <strong className="text-xl">$120</strong>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="bg-[#F4F5F0] rounded-2xl overflow-hidden">
                        <img src={assets.ao} alt="" className="w-full h-full mix-blend-multiply object-cover" />
                    </div>
                    <div>
                        <p className="font-semibold">T-shirt with Tape Details</p>
                        <div className="flex items-center gap-1">
                            <img src={assets.plump_star} alt="" className="w-3" />
                            <img src={assets.plump_star} alt="" className="w-3" />
                            <img src={assets.plump_star} alt="" className="w-3" />
                            <img src={assets.plump_star} alt="" className="w-3" />
                            <img src={assets.flawed_star} alt="" className="w-3" />
                            <p className="text-sm">4.5/<span className="opacity-50">5</span></p>
                        </div>
                        <strong className="text-xl">$120</strong>
                    </div>
                </div>


            </div>
            <div className="text-center">
                <button className="border py-1 px-5 rounded-full">View all</button>
            </div>
        </div>
    )
}
