'use client'

import { DaimoPayButton } from '@daimo/pay'
import { optimismUSDC } from '@daimo/pay-common'
import { getAddress } from 'viem'

export default function Home() {
  return (
    <DaimoPayButton
      appId="pay-demo" /* Example app ID you can use for prototyping */
      toChain={optimismUSDC.chainId}
      toUnits="1.00" /* $1.00 USDC */
      toToken={getAddress(optimismUSDC.token)}
      toAddress="0x4bd18e65e7603958a8F9fF31C2AcBC9c48de5061"
      onPaymentStarted={(e) => console.log(e)}
      onPaymentCompleted={(e) => console.log(e)}
    />
  )
}
