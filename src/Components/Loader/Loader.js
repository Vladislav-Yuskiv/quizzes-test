import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './Loader.css';

export default function LoaderSpinner () {
        return (
            <div >
                <Loader 
                    color="#00BFFF"
                    height={80}
                    width={80}

                />
            </div>
        );
    }
