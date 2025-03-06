import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue", // ADD THIS to scan Vue files
        "./resources/js/**/*.js", // ADD THIS to scan JS files
        "./node_modules/preline/dist/**/*.js", // Change from *.js to **/*.js to ensure all files are included
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                    inter: ['Inter', 'sans-serif'],
                    onest: ['Onest', 'sans-serif'],
            },
        },
    },

    plugins: [forms, require("preline/plugin")],
};
