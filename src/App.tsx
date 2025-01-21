import '@/App.css'
import { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider'
import Router from './routes/router';
import { routes, flattenRoutes } from '@/routes/configs';
import {
	Breadcrumb,
	BreadcrumbItem,
	// BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
	// BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
	// Sidebar,
	// SidebarContent,
	// SidebarFooter,
	// SidebarGroup,
	// SidebarGroupAction,
	// SidebarGroupContent,
	// SidebarGroupLabel,
	// SidebarHeader,
	// SidebarInput,
	SidebarInset,
	// SidebarMenu,
	// SidebarMenuAction,
	// SidebarMenuBadge,
	// SidebarMenuButton,
	// SidebarMenuItem,
	// SidebarMenuSkeleton,
	// SidebarMenuSub,
	// SidebarMenuSubButton,
	// SidebarMenuSubItem,
	SidebarProvider,
	// SidebarRail,
	// SidebarSeparator,
	SidebarTrigger,
} from './components/ui/sidebar';
import { Separator } from "@/components/ui/separator"
import { AppSidebar } from './components/app-sidebar';



export function useCurrentPageTitle() {
	const [currentTitle, setCurrentTitle] = useState(() => {
		const hash = window.location.hash;
		const flatRoutes = flattenRoutes(routes);
		return flatRoutes[hash]?.title || "Home";
	});

	useEffect(() => {
		const updateTitle = () => {
			const hash = window.location.hash;
			const flatRoutes = flattenRoutes(routes);
			setCurrentTitle(flatRoutes[hash]?.title || "Home");
		};

		window.addEventListener('hashchange', updateTitle);
		return () => window.removeEventListener('hashchange', updateTitle);
	}, []);

	return currentTitle;
}

function App() {

	// const getCurrentPageTitle = () => {
	// 	const hash = window.location.hash;
	// 	const flatRoutes = flattenRoutes(routes);
	// 	return flatRoutes[hash]?.title || "Page Not Found";
	// };

	const currentPageTitle = useCurrentPageTitle();

	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<header className="flex gap-2 items-center h-16 border-b shrink-0">
						<div className="flex gap-2 items-center px-4">
							<SidebarTrigger className="-ml-1" />
							<Separator orientation="vertical" className="mr-2 h-4" />
							<Breadcrumb>
								<BreadcrumbList>
									<BreadcrumbSeparator className="hidden md:block" />
									<BreadcrumbItem>
										<BreadcrumbPage>{currentPageTitle}</BreadcrumbPage>
									</BreadcrumbItem>
								</BreadcrumbList>
							</Breadcrumb>
						</div>
					</header>
					<div className="flex flex-col flex-1 gap-4 justify-center items-center p-4 pt-0">
						<Router />
					</div>
				</SidebarInset>
			</SidebarProvider>
		</ThemeProvider >
	)
}

export default App
