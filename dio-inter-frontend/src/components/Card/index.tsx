import { CardContainer } from './styles';


interface CardProps {
    width?: string;
    children?: React.ReactNode;
    height?: string;
    noShadow?: boolean;

}

const Card = ({
    width = '100%',
    children,
    height = 'auto',
    noShadow = false,
}: CardProps) => {
    return (
        <CardContainer width={width} height={height} noShadow={noShadow}>
            {children}
        </CardContainer>
    )
}

export default Card;
