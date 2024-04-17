import React from 'react';
import LoginForm from '@/components/auth/LoginForm/LoginForm';
import Box from "@/components/utils/Box/Box";

function Page() {
    return (
        <div className={'max-w-screen-xl m-auto mt-10'}>
            <div className={'flex gap-10'}>
                <Box className={'justify-center flex-grow basis-1/2 bg-accent/15'}>
                    <LoginForm />
                </Box>
                <div className={'flex-grow basis-1/2'}>
                    <h1 className={'text-black text-xl font-bold'}>Now you have</h1>
                    <p className={'text-black'}>
                        No bitches lmao
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Page;
