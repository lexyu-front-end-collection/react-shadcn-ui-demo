import './App.css'
import { Button } from '@/components/ui/button'
import { LoginForm } from '@/components/LoginForm'
import StatefulLoginForm from '@/components/StatefulLoginForm'
import { ModeToggle } from '@/components/mode-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle2 } from './components/mode-toggle2'

function App() {

	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<h1 className='text-5xl text-center'>ShadCN UI</h1>
			<div className='flex justify-center m-4 space-x-10'>
				<ModeToggle />
				<ModeToggle2 />
			</div>
			<hr />
			<div className='m-10 flex flex-col'>
				<Button variant={"default"} className='mb-5'>Here</Button>
				<Button variant={"destructive"} className='mb-5'>Here</Button>
				<Button variant={"ghost"} className='mb-5'>Here</Button>
				<Button variant={"link"} className='mb-5'>Here</Button>
				<Button variant={"secondary"} className='mb-5'>Here</Button>
			</div>

			<hr />

			<div className="flex items-center justify-center h-screen">
				<LoginForm></LoginForm>
			</div>

			<hr />

			<div className="flex items-center justify-center h-screen">
				<StatefulLoginForm></StatefulLoginForm>
			</div>
		</ThemeProvider >
	)
}

export default App
