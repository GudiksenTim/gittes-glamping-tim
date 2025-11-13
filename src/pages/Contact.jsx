import PageHeader from "../components/pageHeader/PageHeader"
import bgImg from "../assets/image_03.jpg"
import InfoSection from "../components/infoSection/InfoSection"

const Contact = () => {

    return (
        <article>
            <PageHeader 
            bgImg={bgImg}
            titleOne="Kontakt Gitte"
            />
            <InfoSection 
            title="Vil du booke et ophold? 
            Eller har du blot et spørgsmål?"
            description="Så tøv ikke med at tage kontakt til os herunder. 
            Vi bestræber os på at svare på henvendelser indenfor 24 timer, men op til ferier kan der være travlt, og svartiden kan derfor være op til 48 timer."
            contact/>
        </article>
    )

}

export default Contact