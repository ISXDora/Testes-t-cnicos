import './styles.css'

type DivProps = {
    name: string;
    isBoldTitle?: boolean ;
}


export function ItemsForm({isBoldTitle = false, ...props} : DivProps){
    return(
        <div className={`content-itemform ${isBoldTitle? "isBoldTitle" : ""}`} >
            <div> {props.name}</div>
        </div>

    )
}