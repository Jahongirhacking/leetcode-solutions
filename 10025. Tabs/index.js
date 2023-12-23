import React, { useState } from 'react';

/**
 * @typedef {Object} TabObject
 * @property {string} label 
 * @property {string} content
 */

/**
 * @param {Object} props
 * @param {TabObject[]} props.tabsList
 * @return {JSX.Element}
 */
export const Tabs = ({ tabsList }) => {
    const [active, setActive] = useState(0)
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                listStyle: "none",
                margin: "15px 0",
                padding: 0
            }}>
                {tabsList.map((tab, index) => (
                    <button style={{
                        cursor: "pointer",
                        border: "none",
                        padding: "8px",
                        borderRadius: "3px",
                        backgroundColor: index === active ? "black" : "white",
                        color: index === active ? "white" : "black",

                    }} onClick={() => setActive(index)} key={tab.label}>
                        {tab.label}
                    </button>
                ))}
            </div>
            <div>
                {tabsList[active].content}
            </div>
        </>
    )
}
