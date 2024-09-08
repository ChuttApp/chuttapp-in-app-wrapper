import { Screen } from '@chuttapp/in-app-react'
import React from 'react'
import QRCode from "react-qr-code";

export function ShoeDetailsScreen() {
  return (
    <Screen
      headerOptions={{
        title: "Details",
        showBackButton: true
      }}
    >
      Details
      <QRCode value={"app//87ca1f12-7823-40c4-9650-6e3ce318474b//data//"+JSON.stringify({hello: "World"})} />
    </Screen>
  )
}
