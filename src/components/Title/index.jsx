import { ContainerTitle } from './styles'

export function Title({ children, subtitle, ...props }) {
    return (
        <ContainerTitle {...props}>
            <h2>{children}<hr/></h2>
            {subtitle && (
                <p className="textToggle text-gray-300">
                    {subtitle}
                </p>
            )}
        </ContainerTitle>
    )
}
