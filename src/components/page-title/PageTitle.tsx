import React from "react";

type PageTitle = {
    title: string
}
export const PageTitle = (props: PageTitle) => {
    return <h1>{props.title}</h1>
}