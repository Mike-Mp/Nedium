import { Auth } from '@supabase/ui'
import { supabase } from '../../api'

function Profile(props: { supabaseClient: { auth: { signOut: () => void; }; }; children: any; }) {
    const { user } = Auth.useUser();

    if (user)
        return (
            <>
                <p>Signed in : {user.email}</p>
                <button onClick={() => props.supabaseClient.auth.signOut()}>
                    Sign out
                </button>
            </>
        ) 

    return props.children
}

export default function AuthProfile() {
    return (
        <Auth.UserContextProvider supabaseClient={supabase}>
            <Profile supabaseClient={supabase}>
                <Auth supabaseClient={supabase} />
            </Profile>
        </Auth.UserContextProvider>
    )
}