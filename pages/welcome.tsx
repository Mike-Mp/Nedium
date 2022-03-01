import { useRouter } from "next/router";

export default function Welcome() {
    const router = useRouter()
    const {email, login} = router.query

    console.log(login)

    return (
        <>
        {login ? 
        <p>
            Thank your for signing in. Please check your { email } inbox to verify your login.
       </p> 
               :
       <p>
            Thank your for signing up. Please check your { email } inbox to verify your email address.
       </p>

        }
        </>
    )
}