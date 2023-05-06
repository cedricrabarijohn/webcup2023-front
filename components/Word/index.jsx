export default function Word({ predict , word}) {
    const predictFunc = ()=>{
        predict();
    }

    return(
        <p className="ball-inside" onClick={()=>predictFunc()}>
            {word}
        </p>
    );
}