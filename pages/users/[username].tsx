import { NextPage } from 'next'
import  Link from 'next/link'
import { useRouter } from 'next/router'
import { supabase } from '../../api'

const Profile: NextPage = () => {
    const user = supabase.auth.user()
    const router = useRouter()

    console.log(user)

    async function logOut() {
        const { error } = await supabase.auth.signOut()

        console.log(error)

        if (!error) router.push('/')
    }

    if (user) {
        return (
            <>
                <p>Signed in : {user.email}</p>
                <button onClick={logOut}>
                    Sign out
                </button>
                <Link href={`${user.email}/settings`}>
                    <a>
                        Settings    
                   </a> 
                </Link>
            </>
        ) 
    }

    return (
        <>
            <p>viewing users profile</p>
        </>
    )
}

export default Profile;