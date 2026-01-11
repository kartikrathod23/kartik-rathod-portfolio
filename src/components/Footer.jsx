"use client";
export default function Footer(){
    return(
        <footer className="py-6 mt-12 border-t border-gray-800 text-center text-gray-500">
            &copy; {new Date().getFullYear()} Kartik Rathod. All rights reserved.
        </footer>
    )
}