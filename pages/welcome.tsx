import { useRouter } from "next/router";

export default function Welcome() {
    const router = useRouter()
    const {email} = router.query

    return (
        <>
            <p>
                Thank your for signing up. Please check your { email } inbox to verify your email address.
            </p>
        </>
    )
}