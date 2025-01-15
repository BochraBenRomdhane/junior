import React from "react";
import "../style.css"
const Footer = () => {
    return (
        <footer className="footer text-center py-3">
            <p>&copy; 2025 Only Female</p>
            <p>
                <a href="#" className="text">Privacy Policy</a> |
                <a href="#" className="text">Terms of Service</a>
                <br />
                <a href="https://github.com/BochraBenRomdhane?tab=repositories" target="_blank">
                    <img className="gitimg" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub Logo" width="40" height="40" />
                </a>
            </p>
        </footer>
    )
}

export default Footer