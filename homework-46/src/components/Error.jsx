

function Error({ error }) {
    return(
        <div className="error-container">
            <h1>Error</h1>
            <p>{error}</p>
        </div>
    );
};

export default Error;