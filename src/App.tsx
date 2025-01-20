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
		return flatRoutes[hash]?.title || "Page Not Found";
	});

	useEffect(() => {
		const updateTitle = () => {
			const hash = window.location.hash;
			const flatRoutes = flattenRoutes(routes);
			setCurrentTitle(flatRoutes[hash]?.title || "Page Not Found");
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
					<header className="flex h-16 shrink-0 items-center gap-2">
						<div className="flex items-center gap-2 px-4">
							<SidebarTrigger className="-ml-1" />
							<Separator orientation="vertical" className="mr-2 h-4" />
							<Breadcrumb>
								<BreadcrumbList>
									<BreadcrumbItem>
										<BreadcrumbPage>{currentPageTitle}</BreadcrumbPage>
									</BreadcrumbItem>
								</BreadcrumbList>
							</Breadcrumb>
						</div>
					</header>
					<div className="flex flex-1 flex-col gap-4 p-4 pt-0 justify-center items-center">
						<Router />
					</div>
				</SidebarInset>
			</SidebarProvider>
		</ThemeProvider >
	)
}

export default App
