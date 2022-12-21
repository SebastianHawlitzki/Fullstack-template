


export default function MovieCard (props:{

    id: string
    title: string
    posterUrl: string
    year: string


}) {


    return (

        <div>
            <div className={"card"}>

                <div className={"card-body"}>
                    <img src={props.posterUrl} alt={"Movie"}/>
                </div>
                <div className={"card-footer"}>
                    <p>{props.title} ({props.year})</p>
                </div>

            </div>



        </div>
    );
}
