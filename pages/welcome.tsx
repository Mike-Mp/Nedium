import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export interface Props {
    email: string,
    login: boolean
}

export default function Welcome(props: Props) {

    return (
        <>
        {props.login ? 
        <p className="shadow-lg">
            Thank your for signing in. Please check your {props.email} inbox to verify your login.
       </p> 
               :
       <p className="shadow-lg">
            Thank your for signing up. Please check your {props.email} inbox to verify your email address.
       </p>
        }
        </>
    )
}

export const getServerSideProps = async (ctx: any) => {

    console.log('ctx', ctx)

    console.log(ctx.query)

    const query = ctx.query;

    return {
        props: {
            email: query.email,
            login: query.login
        }
    }
}