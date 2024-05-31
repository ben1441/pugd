import React from "react";

const Loading = (): React.ReactElement => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center">
            <div className="w-[50px] h-[50px] border-[5px] border-white animate-spin"></div>
        </div>
    )
}

export default Loading;