import { Moon, Sun } from "lucide-react"
import { Button } from '@/components/ui/button'
import { useTheme } from "@/components/theme-provider"

export function ModeToggle2() {
	const { theme, setTheme } = useTheme()

	return (
		<div className="flex items-center space-x-2">
			{theme !== "light" && (
				<Button variant="outline" onClick={() => setTheme("light")}
					className="h-10 w-10 flex items-center justify-center rounded-full"
				>
					<Sun className="h-5 w-5" />
				</Button>
			)}
			{theme !== "dark" && (
				<Button variant="outline" onClick={() => setTheme("dark")}
					className="h-10 w-10 flex items-center justify-center rounded-full"
				>
					<Moon className="h-5 w-5" />
				</Button>
			)}
		</div>
	)
}