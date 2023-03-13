import React from "react";


export const TextArea = (input: any, meta: any, ...props: any) => {
    return (
    <div>
        <textarea {...input} {...props}/>
    </div>
    )
}