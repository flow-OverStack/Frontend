import "./Error.css"

interface IFormFieldProps {
    errorMessage?: string;
}

const ErrorSpan = ({
    errorMessage, }: IFormFieldProps) => {
    return (
        <span className="error">
            {errorMessage && <span>{errorMessage as string}</span>}
        </span>
    )
}

export default ErrorSpan