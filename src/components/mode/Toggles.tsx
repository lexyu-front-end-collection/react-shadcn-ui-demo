import { ModeToggle } from "@/components/mode/ModeToggle1"
import { ModeToggle2 } from "@/components/mode/ModeToggle2"

export const Toggles = () => {
	return (
		<>
			<h1 className='text-5xl text-center'>Mode</h1>
			<div className='flex justify-center m-4 space-x-10'>
				<ModeToggle />
				<ModeToggle2 />
			</div>
		</>
	)
}
