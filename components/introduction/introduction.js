import { getAffiliation } from "../../lib/introduction";
import { IntroductionRow } from "./introductionRow";

export function Introduction() {
    const affilication = getAffiliation();
    const introductionSection = affilication.map((row) => {
        return (
            <IntroductionRow 
            title = {row.title}
            subtitle = {row.subtitle}
            current = {row.current}
            term = {row.term}
            type = {row.type}
            description = {row.description}
            />
        )})

    return (
        <div>
            {introductionSection}
        </div>
    )
}