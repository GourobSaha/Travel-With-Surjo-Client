import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Travel With Surjo`;
    }, [title])
};

export default useTitle;