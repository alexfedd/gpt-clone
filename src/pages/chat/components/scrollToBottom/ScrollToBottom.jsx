import { useEffect } from "react";
import { useRef } from "react";

function ScrollToBottom({bottomRef}) {
    useEffect(() => {
        bottomRef.current.scrollIntoView();
    }, [])
    return ( <div ref={bottomRef}></div> );
}

export default ScrollToBottom;