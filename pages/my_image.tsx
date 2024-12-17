import React from 'react';

type Props = {
    height: number;
    width: number;
    // Add stuff here later, maybe.

}

export default function MyImage(props: Props) {
    const viewBox = [0, 0, 1000, 1000].join(" ");

    return (
        <svg
            height={props.height}
            width={props.width}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            >
            <g>

                <circle
                    cx="500"
                    cy="500"
                    r="500"
                    fill="blue"
                    />
            </g>
        </svg>

    )
}