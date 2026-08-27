

function CentralMessage({children}) {

    return(
        <div className="flex items-center justify-center h-screen w-screen">
            <p className="text-2xl">
                {children}
            </p>
        </div>
    )
}

export default CentralMessage;