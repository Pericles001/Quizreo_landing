

export function GetStarted(){
    const handleClick = () => {
        window.location.href = 'https://quizreofrontend1.netlify.app/';
    }
    return (
        <div className="mt-5 mb-5 d-grid gap-2 col-6 mx-auto" id="StartSec">
            <button className="btn btn-secondary shadow mb-3" type="submit" onClick={handleClick}><h4>Get Started</h4></button>
        </div>
    )
}
