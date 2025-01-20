import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'


export function LoginForm() {
    return (
        <div className=''>

            <h1 className='mb-4'>ShadCN LoginForm (Card + Label + Input + Button)</h1>

            <Card className='w-full max-w-sm'>
                <CardHeader>
                    <CardTitle className='text-2xl'>Login</CardTitle>
                    <hr />
                    <CardDescription>
                        Enter your email below to login to your account.
                    </CardDescription>
                </CardHeader>

                <CardContent className='grid gap-4'>
                    <div className='grid gap-2'>
                        <Label htmlFor='email'>Label</Label>
                        <Input id='email' placeholder='Email'></Input>
                    </div>

                    <div className='grid gap-2'>
                        <Label htmlFor='password'>Label</Label>
                        <Input id='password' type='password' required placeholder='Password'></Input>
                    </div>
                </CardContent>

                <CardFooter>
                    <Button className='w-full'>Button</Button>
                </CardFooter>
            </Card>
        </div>
    )
}