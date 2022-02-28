import {NextPage} from 'next'
import { useState } from 'react';
import { supabase } from '../api';

const Signin: NextPage = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')

    const handleLogin = async (email: string) => {
        try {
            setLoading(true)
            const { user, error } = await supabase.auth.signIn({ email })
            if (error) throw error
            if (user) {
                console.log('user here')
                console.log(user)
            }
            alert('Check email for login link!')
        } catch(error) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-full max-w-xs mx-auto mt-24">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input 
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="email" 
                    type="text" 
                    placeholder="Email" />
                </div>
                <div className="mb-6">
                </div>
                <div className="flex items-center justify-between">
                <button 
                onClick={(e) => {
                    e.preventDefault()
                    handleLogin(email)
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