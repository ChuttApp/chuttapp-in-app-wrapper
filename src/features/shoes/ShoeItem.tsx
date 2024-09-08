import React, { useState } from 'react'
import { shoesRoutes } from '../../utils/routes';
import { Button, useNav, usePay,useInAppResponse} from '@chuttapp/in-app-react';

export function ShoeItem({ item }: { item: any }) {
    const { navigate } = useNav();
    const [resp, setresp] = useState<any>()
    const { pay } = usePay(item.id, (response) => {
        setresp(JSON.stringify(response))
        alert("Hello")
    });
    const {responses} = useInAppResponse()
    console.log(item.id, responses);

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

    return (
        <div style={{ height: 100, padding: 10 }}>
            {item.title}
            <div style={{ display: 'flex', gap: 12 }}>
                <Button onClick={goToShowDetails}>Details</Button>
                <Button onClick={onPay}>{resp || "Pay now!"}</Button>
            </div>
        </div>
    )
}
