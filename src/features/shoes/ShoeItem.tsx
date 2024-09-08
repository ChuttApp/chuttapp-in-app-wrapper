import React, { useState } from 'react'
import { shoesRoutes } from '../../utils/routes';
import { Button, InAppService, useNav, usePay } from '@chuttapp/in-app-react';

export function ShoeItem({ item }: { item: any }) {
    const { navigate } = useNav();
    const [resp, setresp] = useState<any>()
    const { pay } = usePay(item.id, (response: any) => {
        setresp(response.transactionId)
    });

    const goToShowDetails = () => {
        navigate(shoesRoutes.shoeDetailsScreen)
    }

    const onPay = () => {
        pay({
            amount: 5.55,
            currency: 'GHS',
            reference: item.id
        } as any)
    }

    const onOpenScanner = () => {
        InAppService.onOpenScanner();
    }

    return (
        <div style={{ height: 100, padding: 10 }}>
            {item.title}
            <div style={{ display: 'flex', gap: 12 }}>
                <Button onClick={goToShowDetails}>Details</Button>
                <Button onClick={onPay}>{resp || "Pay now!"}</Button>
                <Button onClick={onOpenScanner}>Open QR Code</Button>
                <Button onClick={onOpenScanner}>Scan</Button>
            </div>
        </div>
    )
}
