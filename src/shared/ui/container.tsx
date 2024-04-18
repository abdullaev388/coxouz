import React from "react";

export const Container = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='max-w-[1100px] mx-auto h-full'>
            {children}
        </div>
    )
}