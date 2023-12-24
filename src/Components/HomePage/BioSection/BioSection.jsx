import { BioCards } from "../../PageElements/BioCard/BioCards";

export function BioSection() {
    return(
        <section className="biosection">
            <div className="biocardsection-title-container">
                    <h1 id="biocardsection-title">MEET OUR MEDIUMS</h1>
            </div>
            <BioCards lowerBound={0} upperBound={3}/>

        </section>
    )
}