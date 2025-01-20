import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';


type MenuItem = {
    label: string;
    href?: string;
    children?: MenuItem[];
}

const MenuListItem = ({ item }: { item: MenuItem }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (item.children) {
        return (
            <li className="mb-2">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center w-full p-2 rounded-md 
                    transition-colorshover:bg-amber-200/60 dark:hover:bg-stone-700
                    text-stone-900 dark:text-stone-100"
                >
                    {isOpen ? (
                        <ChevronDown className="h-4 w-4 mr-2" />
                    ) : (
                        <ChevronRight className="h-4 w-4 mr-2" />
                    )}
                    {item.label}
                </button>

                {isOpen && (
                    <ul className="ml-4 mt-2">
                        {item.children.map((child, index) => (
                            <MenuListItem key={index} item={child} />
                        ))}
                    </ul>
                )}
            </li>
        );
    }

    return (
        <li className="mb-2">
            <a href={item.href}
                className="block p-2 hover:bg-gray-700 rounded-md transition-colors">
                {item.label}
            </a>
        </li>
    );
}


export const Sidebar = () => {
    const menuItems: MenuItem[] = [
        { label: 'Home', href: '#/' },
        {
            label: 'Forms',
            children: [
                { label: 'LoginForm', href: '#/forms/login_form' },
                { label: 'StateFulLoginForm', href: '#/forms/stateful_login_form' },
            ],
        },
        { label: 'Buttons', href: '#/buttons' },
        { label: 'Layout', href: '#/sidebar' },

    ];

    return (
        <nav className="w-48 fixed h-full overflow-y-auto
            bg-amber-50 dark:bg-stone-800 
            text-stone-900 dark:text-stone-100
            border-r border-amber-100 dark:border-stone-700 font-bold">
            <ul>
                {menuItems.map((item, index) => (
                    <MenuListItem key={index} item={item} />
                ))}
            </ul>
        </nav>
    );
};