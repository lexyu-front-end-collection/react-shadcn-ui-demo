import { Buttons } from "@/components/Buttons";
import { LoginForm } from "@/components/forms/LoginForm";
import StatefulLoginForm from "@/components/forms/StatefulLoginForm";

type RouteConfig = {
    title: string
    url?: string
    component?: () => React.ReactNode
    children?: Omit<RouteConfig, 'children'>[]
}

export const routes: RouteConfig[] = [
    {
        title: "Home",
        url: "#/",
        component: () => <h1 className='text-6xl'>Welcome !!</h1>
    },
    {
        title: "Forms",
        children: [
            {
                title: "Login Form",
                url: "#/forms/login_form",
                component: () => <LoginForm />
            },
            {
                title: "Stateful Login Form",
                url: "#/forms/stateful_login_form",
                component: () => <StatefulLoginForm />
            }
        ]
    },
    {
        title: "Buttons",
        url: "#/buttons",
        component: () => <Buttons />
    }
]

export const flattenRoutes = (routes: RouteConfig[]): Record<string, RouteConfig> => {
    const flattened: Record<string, RouteConfig> = {};

    const flatten = (items: RouteConfig[]) => {
        items.forEach(item => {
            if (item.url) {
                flattened[item.url] = item;
            }
            if (item.children) {
                flatten(item.children);
            }
        });
    };

    flatten(routes);
    return flattened;
};