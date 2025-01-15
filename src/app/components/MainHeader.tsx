'use client'

import {useState} from 'react'
import {Dialog, DialogPanel} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'

const navigation = [
    {name: 'Product', href: '#'},
    {name: 'Features', href: '#'},
    {name: 'Marketplace', href: '#'},
    {name: 'Company', href: '#'},
]

export default function MainHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src="DIS_logo.png"
                            className="h-8 w-auto"
                        />
                    </a>
                    <div className="pl-2">
                        | Minneapolis
                    </div>
                </div>
                {/*<div className="flex lg:hidden">*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        onClick={() => setMobileMenuOpen(true)}*/}
                {/*        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"*/}
                {/*    >*/}
                {/*        <span className="sr-only">Open main menu</span>*/}
                {/*        <Bars3Icon aria-hidden="true" className="size-6"/>*/}
                {/*    </button>*/}
                {/*</div>*/}
                {/*<div className="hidden lg:flex lg:gap-x-12">*/}
                {/*    {navigation.map((item) => (*/}
                {/*        <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">*/}
                {/*            {item.name}*/}
                {/*        </a>*/}
                {/*    ))}*/}
                {/*</div>*/}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button
                        type="button"
                        className="inline-flex items-center px-5 py-2.5 font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none dark:focus:ring-blue-800"
                    >
                        <span
                            className="inline-flex items-center justify-center w-7 h-7 ms-2 text-xs font-semibold text-blue-800 rounded-full">
                            <svg className="w-10 h-10 text-gray-800 dark:#111827" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                            </svg>
                        </span>
                    </button>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10"/>
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
