import React from 'react'
import { shoesRoutes } from '../../utils/routes';
import { Button, useNav, usePay } from '@chuttapp/in-app-react';

export function ShoeItem({ item }: { item: any }) {
    const { navigate } = useNav();
    const { pay } = usePay();

    const goToShowDetails = () => {
        navigate(shoesRoutes.shoeDetailsScreen)
    }

    const onPay = () => {
        pay({
            amount: 3.55,
            currency: 'GHS'
        })
    }

    return (
        <div style={{ height: 100, padding: 10 }}>
            {item.title}
            <div style={{ display: 'flex', gap: 12 }}>
                <Button onClick={goToShowDetails}>Details</Button>
                <Button onClick={onPay}>Pay</Button>
            </div>
        </div>
    )
}
