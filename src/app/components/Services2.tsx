export default function Services2() {
    return (
        <div className="bg-white py-24 mx-8 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-base/7 font-semibold text-blue-800">You should focus on what you’re really good at
                </h2>
                <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                    These are the services we can handle for you
                </p>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                    <div className="relative lg:col-span-3">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                            <img
                                alt=""
                                src="cloud_security.jpg"
                                className="h-80 object-cover object-left"
                            />
                            <div className="p-5 pt-4">
                                <h3 className="text-1xl font-semibold text-blue-800">Security</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">From Digital to Door Access</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                                    Cyber Security Trainings, Network safeguards and monitoring, Cameras, Doors and everything inbetween. We cover it all when it comes to security.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                    </div>
                    <div className="relative lg:col-span-3">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                            <img
                                alt=""
                                src="data_cloud.jpg"
                                className="h-80 object-cover object-left lg:object-right"
                            />
                            <div className="p-5 pt-4">
                                <h3 className="text-1xl font-semibold text-blue-800">Data</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Cloud Solutions to Physical Storage</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                                    Disaster Recovery, Redundant backups, Cloud data migration and more. Besides employees your companies data is your most important asset.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
                    </div>
                    <div className="relative lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                            <img
                                alt=""
                                src="hardware_install.jpg"
                                className="h-80 object-cover object-left"
                            />
                            <div className="p-5 pt-4">
                                <h3 className="text-1xl font-semibold text-blue-800">Hardware</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Optimize your Office</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                                    Need new servers? How about new laptops or faster wifi? If you need it we can get it.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
                    </div>
                    <div className="relative lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-white" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <img
                                alt=""
                                src="consulting.jpg"
                                className="h-80 object-cover"
                            />
                            <div className="p-5 pt-4">
                                <h3 className="text-1xl font-semibold text-blue-800">Consulting</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">We&#39;re here to help</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                                    Need another pair of eyes on your IT project? Want expert advise on leading industry standards? We can help.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
                    </div>
                    <div className="relative lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                            <img
                                alt=""
                                src="manage_tech.jpg"
                                className="h-80 object-cover"
                            />
                            <div className="p-5 pt-4">
                                <h3 className="text-1xl font-semibold text-blue-800">Managing</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Everything in place</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                                    Systems are already set but you need someone to run the tech show? Drop us a line.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
                    </div>
                </div>
            </div>
        </div>
    )
}
