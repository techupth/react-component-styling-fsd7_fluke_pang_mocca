/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Error } from "../assets/Error";
import { Info } from "../assets/Info";
import { Success } from "../assets/Success";
import { Warning } from "../assets/Warning.";

const alertTypes = {
    error: {
        icon: <Error />,
        message: "This is an error alert box",
        backgroundColor: "#F9C8C8",
    },
    warning: {
        icon: <Warning />,
        message: "This is a warning alert box",
        backgroundColor: "#F9D9C8",
    },
    info: {
        icon: <Info />,
        message: "This is an info alert box",
        backgroundColor: "#F9EBC8",
    },
    success: {
        icon: <Success />,
        message: "This is a success alert box",
        backgroundColor: "#CEF7CD",
    },
};

export function Alert({ type }) {
    const alert = alertTypes[type.toLowerCase()];

    return (
        <div
            css={css`
                display: flex;
                justify-content: start;
                align-items: center;
                gap: 5px;
                width: 650px;
                height: 76px;
                margin: 10px;
                border-radius: 10px;
                color: black;
                font-weight: 700;
                font-size: x-large;
                background-color: ${alert.backgroundColor};
            `}
        >
            {alert.icon}
        </div>
    );
}