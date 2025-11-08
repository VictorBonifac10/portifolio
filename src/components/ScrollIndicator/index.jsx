import { ScrollContainer } from './styles'

export function ScrollIndicator() {
    return (
        <ScrollContainer>
            <div class="scroll-indicator">
                <div class="mouse">
                    <div class="wheel"></div>
                </div>
            </div>
        </ScrollContainer>
    )
}