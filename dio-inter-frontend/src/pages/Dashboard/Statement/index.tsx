import { StatementItemContainer, StatementItemImage, StatementItemInfo, StatementContainer } from './styles';
import { FiDollarSign } from 'react-icons/fi'
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { transactions } from '../../../services/resources/pix'
import useAuth from '../../../hooks/useAuth';
interface StatementItem {
    user: {
        firstName: string;
        lastName: string;
    },
    value: number;
    type: 'pay' | 'received';
    updatedAt: Date;
}


const StatementItem = ({ user, value, type, updatedAt }: StatementItem) => {
    return (
        <StatementItemContainer>
            <StatementItemImage type={type}>
                <FiDollarSign size={24} />
            </StatementItemImage>
            <StatementItemInfo>
                <p className="primary-color">
                    {value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                </p>
                <p className="">{type === 'pay' ? `Pago a ` : `Recebido de`} <strong>{user.firstName} {user.lastName}</strong></p>
                <p className="">{format(new Date(updatedAt), "dd/MM/yyyy 'às' HH:mm'h'")}</p>
            </StatementItemInfo>
        </StatementItemContainer>
    )
}

const Statement = () => {

    const { } = useAuth()
    const [statements, setStatements] = useState<StatementItem[]>([])

    const getAllTransactions = async () => {
        const { data } = await transactions()
        setStatements(data.transactions)
    }

    useEffect(() => {
        getAllTransactions()
    }, [])

    return (
        <StatementContainer>
            {statements.length > 0 && statements?.map(statement => <StatementItem {...statement} />)}
        </StatementContainer>
    )
}

export default Statement;