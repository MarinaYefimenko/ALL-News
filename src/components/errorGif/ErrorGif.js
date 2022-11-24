import './errorGif.scss';

const ErrorGif = () => {
    return(
        <div className="errorWrapper">
            <img src="./error.gif" alt="error" />
            <div className="errorText">Something went wrong...</div>
        </div>
    )
}

export default ErrorGif;