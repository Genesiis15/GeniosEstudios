import { useEffect } from "react"

export function ItemReview({ text,
    comments,
    likes,
    reactions_count,
    shares,
    feelings = [],
    reactions = [],
}) {

    useEffect(() => {
        console.log(feelings)
    }, [feelings])


    return (
        <>

            <div
                className="rounded-lg flex flex-col justify-between  border bg-card text-card-foreground shadow-sm w-full max-w-md p-2 space-y-4"
                id="1msejbl6vxe"
                data-v0-t="card"
            >
                <div >

                    <div className="flex flex-wrap justify-center gap-2">
                        {
                            reactions.map(item => {

                                return (
                                    <div key={item.label} className={`flex items-center space-x-4 ${item.label === 'NEG' && 'bg-red-100 dark:bg-yellow-900/20'} ${item.label === 'NEU' && 'bg-yellow-100 dark:bg-yellow-900/20'}${item.label === 'POS' && 'bg-green-100 dark:bg-green-900/20'} p-2 rounded-md `}>

                                        {item.label === 'NEG' && <>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                className="h-5 w-5 text-red-500"
                                            >
                                                <path d="M17 14V2"></path>
                                                <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"></path>
                                            </svg>
                                        </>} {item.label === 'NEU' && <>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                // stroke-width="2"
                                                // stroke-linecap="round"
                                                // stroke-linejoin="round"
                                                className="h-5 w-5 text-yellow-500"
                                            >
                                                <line x1="5" x2="19" y1="9" y2="9"></line>
                                                <line x1="5" x2="19" y1="15" y2="15"></line>
                                            </svg>
                                        </>}
                                        {item.label === 'POS' && <>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                // stroke-width="2"
                                                // stroke-linecap="round"
                                                // stroke-linejoin="round"
                                                className="h-5 w-5 text-green-500"
                                            >
                                                <path d="M7 10v12"></path>
                                                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                                            </svg>
                                        </>}
                                        <div>
                                            <h3>{item.score.toString().substr(0, 8)}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p className="mt-5">
                        {text}
                    </p>
                </div>

                <div>
                    <div className="space-y-4 my-5">

                        <div className="flex items-center justify-between">
                            <div className="flex flex-wrap justify-center items-center gap-2">
                                <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        // stroke-width="2"
                                        // stroke-linecap="round"
                                        // stroke-linejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                    </svg>
                                    <span>{comments}</span>
                                </div>
                                <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        // stroke-width="2"
                                        // stroke-linecap="round"
                                        // stroke-linejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                    </svg>
                                    <span>{reactions_count}</span>
                                </div>
                                <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        // stroke-width="2"
                                        // stroke-linecap="round"
                                        // stroke-linejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <path d="M7 10v12"></path>
                                        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                                    </svg>
                                    <span>{likes}</span>
                                </div>
                                <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        // stroke-width="2"
                                        // stroke-linecap="round"
                                        // stroke-linejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                        <polyline points="16 6 12 2 8 6"></polyline>
                                        <line x1="12" x2="12" y1="2" y2="15"></line>
                                    </svg>
                                    <span>{shares}</span>
                                </div>
                            </div>

                        </div>


                      
                    </div>

                    <div className="flex flex-wrap justify-around gap-2 items-center  bg-gray-100 p-4 rounded-md dark:bg-gray-200">

                        {feelings.map(item => (<div key={item.label} className="flex flex-col items-center">
                            <div className="text-sm font-bold">{item.score.toString().substr(0, 5)}</div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">{item.label.charAt(0).toUpperCase() + item.label.slice(1)}</p>
                        </div>))}
                    </div>
                </div>
            </div>
        </>
    )
}