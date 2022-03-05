import {NextPage} from 'next'
import { useState, useEffect } from 'react'
import { supabase } from '../api'
import { useRouter } from 'next/router'

import ErrorMessage from '../components/ErrorMessage'

const Signin: NextPage = () => {
    const [loading, setLoading] = useState(false)
    const [errorPresent, setErrorPresent] = useState(false)
    const [errorText, setErrorText] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    useEffect(() => {
        const user = supabase.auth.user()

        if (user?.email) router.push(`/users/${user.email}`)
    }, [])


    const handleLogin = async () => {
            setLoading(true)
            const res = await fetch('/api/login', {
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: "POST",
            })


            const { user, error } = await res.json()

            if (user) router.push(`/welcome?login=${true}&email=${user.email}`)
            if (error) {
                setErrorText(error)
                setErrorPresent(true)
            }
            setLoading(false)
    }

    return (
        <div className="w-full max-w-xs mx-auto mt-24">
            {errorPresent ? <ErrorMessage message={errorText} setErrorPresent={setErrorPresent}/> 
                          : '' }
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input 
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="email" 
                    type="text" 
                    placeholder="Email" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input 
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    type="password" name="password" id="password" placeholder="Password"/>
                </div>
                <div className="flex items-center justify-between">
                <button 
                onClick={(e) => {
                    e.preventDefault()
                    handleLogin()
                }}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    {loading ? 'Loading' : 'Sign In with Magic Link'}
                </button>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
        &copy;2022 Mike-Mp All rights reserved.
            </p>
        </div>
)
}

export default Signin;