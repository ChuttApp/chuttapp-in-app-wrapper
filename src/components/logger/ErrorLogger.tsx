import React from 'react'
import { Logger } from '.'
import { Button } from '../button'
import { ErrorAnimation } from '../animation/Animations'

export function ErrorLogger({ onRetry }: { onRetry?: () => void }) {
    return (
        <Logger
            title='An error occured'
            subtitle='Something happened while executing this operation.'
            graphic={<ErrorAnimation />}
        >
            {
                onRetry && (
                    <Logger.Actions>
                        <Button onClick={onRetry}>Try again</Button>
                    </Logger.Actions>
                )
            }
        </Logger>
    )
}
