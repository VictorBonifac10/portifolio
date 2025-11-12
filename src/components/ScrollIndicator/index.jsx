//Tags from Styles
import { ScrollContainer } from './styles'

export function ScrollIndicator() {
    return (
        <ScrollContainer>
            <section className="scroll-indicator">
                <article className="mouse">
                    <div className="wheel"></div>
                </article>
            </section>
        </ScrollContainer>
    )
};