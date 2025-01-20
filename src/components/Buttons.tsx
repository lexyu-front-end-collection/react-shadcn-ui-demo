import { Button } from "@/components/ui/button"


export const Buttons = () => {
	return (
		<>
			<div className='m-10 flex flex-col'>
				<Button variant={"default"} className='mb-5'>Here</Button>
				<Button variant={"destructive"} className='mb-5'>Here</Button>
				<Button variant={"ghost"} className='mb-5'>Here</Button>
				<Button variant={"link"} className='mb-5'>Here</Button>
				<Button variant={"secondary"} className='mb-5'>Here</Button>
			</div>
		</>
	)
}
