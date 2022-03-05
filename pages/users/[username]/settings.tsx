import { NextPage } from 'next'
import { supabase } from '../../../api'

const Settings: NextPage = ({user}) => {

    console.log(user)

    return (
        <>
            <p>user settings</p>
        </>
    )
}

export const getServerSideProps = async (ctx: any) => {

    const { user, token } = await supabase.auth.api.getUserByCookie(ctx)

    console.log('user', user)
    console.log('token', token)

    return {
        props: {
            user
        }
    }
}

export default Settings