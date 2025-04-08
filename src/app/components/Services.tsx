import {
    UserGroupIcon,
    ArrowUpLeftIcon,
    WrenchScrewdriverIcon,
    CircleStackIcon,
    CloudIcon,
    GlobeAltIcon,
    UsersIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline'

const actions = [
    {
        title: 'Cybersecurity',
        href: '#',
        icon: ShieldCheckIcon,
        iconForeground: 'text-gray-200',
        iconBackground: 'bg-[#192B6D]',
    },
    {
        title: 'Managed IT',
        href: '#',
        icon: UsersIcon,
        iconForeground: 'text-gray-200',
        iconBackground: 'bg-emerald-800',
    },
    {
        title: 'Network Solutions',
        href: '#',
        icon: GlobeAltIcon,
        iconForeground: 'text-gray-200',
        iconBackground: 'bg-emerald-800',
    },
    {
        title: 'Data Backup',
        href: '#',
        icon: CircleStackIcon,
        iconForeground: 'text-gray-200',
        iconBackground: 'bg-[#192B6D]',
    },
    {
        title: 'Cloud Migration',
        href: '#',
        icon: CloudIcon,
        iconForeground: 'text-gray-200',
        iconBackground: 'bg-[#192B6D]',
    },
    {
        title: 'Hardware Install',
        href: '#',
        icon: WrenchScrewdriverIcon,
        iconForeground: 'text-gray-200',
        iconBackground: 'bg-emerald-800',
    },
    {
        title: 'Disaster Recovery',
        href: '#',
        icon: ArrowUpLeftIcon,
        iconForeground: 'text-gray-200',
        iconBackground: 'bg-emerald-800',
    },
    {
        title: 'Tech Consulting',
        href: '#',
        icon: UserGroupIcon,
        iconForeground: 'text-gray-200',
        iconBackground: 'bg-[#192B6D]',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Services() {
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px m-8 sm:divide-y-0">
            {actions.map((action, actionIdx) => (
                <div
                    key={action.title}
                    className={classNames(
                        actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                        actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                        actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                        'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-emerald-700',
                    )}
                >
                    <div>
            <span
                className={classNames(
                    action.iconBackground,
                    action.iconForeground,
                    'inline-flex rounded-lg p-3 ring-4 ring-white',
                )}
            >
              <action.icon aria-hidden="true" className="size-6" />
            </span>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-base font-semibold text-gray-900">
                            <a href={action.href} className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span aria-hidden="true" className="absolute inset-0" />
                                {action.title}
                            </a>
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et
                            quo et molestiae.
                        </p>
                    </div>
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                    >
            <svg fill="currentColor" viewBox="0 0 24 24" className="size-6">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
                </div>
            ))}
        </div>
    )
}
