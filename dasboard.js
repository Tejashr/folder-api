
export default function Dash(props) {

    console.log(props)
    return (<>
        <div className="col-3  mt-5">
            <div class="card bg-primary">
                <div class="card-header bg-primary text-light">
                    <p><i className={`${props.user.file} `}> </i> {props.user.name}</p>
                </div>
            </div>
        </div>
    </>)

}