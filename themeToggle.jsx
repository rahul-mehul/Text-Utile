import React, { useState } from "react";

export const ThemeToggle = () => {
    const [theme, setTheme] = useState({
    });
    function handlethemeL() {
        setTheme({
            background: "white",
            color: "green"
        })
    }
    function handlethemeD() {

        setTheme({
            background: "black",
            color: "grey"
        })

    }
    function handleToggle() {
        if (theme.background === "red") {
            setTheme({
                background: "green",
                color: "white"
            })
        } else {
            setTheme({
                background: "red",
                color: "white"
            })

        }
    }


    return (
        <div>
            <div style={theme}>
                <h1> My Theme Background  </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente soluta autem deserunt quia error debitis ipsa quod vitae officia optio cumque iste doloremque officiis, magni enim fuga consectetur nam asperiores totam rem impedit non possimus eum numquam. Minus dolor, reprehenderit accusamus voluptatum tempora ut dicta veritatis cupiditate maiores placeat eaque!</p>
                {/* <button onClick={handlethemeD}>Dark</button>
                <button onClick={handlethemeL}>Light</button> */}
            </div>
            <div style={theme}>
                <h1> My Theme Background  </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente soluta autem deserunt quia error debitis ipsa quod vitae officia optio cumque iste doloremque officiis, magni enim fuga consectetur nam asperiores totam rem impedit non possimus eum numquam. Minus dolor, reprehenderit accusamus voluptatum tempora ut dicta veritatis cupiditate maiores placeat eaque!</p>
                {/* <button onClick={handlethemeD}>Dark</button>
                <button onClick={handlethemeL}>Light</button> */}
            </div>
            <div style={theme}>
                <h1> My Theme Background  </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente soluta autem deserunt quia error debitis ipsa quod vitae officia optio cumque iste doloremque officiis, magni enim fuga consectetur nam asperiores totam rem impedit non possimus eum numquam. Minus dolor, reprehenderit accusamus voluptatum tempora ut dicta veritatis cupiditate maiores placeat eaque!</p>
                <button onClick={handlethemeD}>Dark</button>
                <button onClick={handlethemeL}>Light</button>
            </div>
            <button onClick={handleToggle}>Toggle theme</button>
        </div>

    );
}