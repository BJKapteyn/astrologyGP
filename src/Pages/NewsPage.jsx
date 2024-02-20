import { NewsCards } from "../Components/HomePage/NewsCard/NewsCards";
import { TitleSection } from "../Components/NewsPage/TitleSection/TitleSection";

export default function NewsPage() {
    return (
        <main className="newspage">
            <TitleSection></TitleSection>
            <NewsCards></NewsCards>
        </main>
    )
}