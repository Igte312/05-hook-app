
export const ShowIncrement = ({ increment }) => {

    console.log('Me volví a generar :(')
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment();
            }}
        >
            incrementar
        </button>
    )
}
