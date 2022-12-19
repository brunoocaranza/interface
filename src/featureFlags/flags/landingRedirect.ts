import { UNIVERSAL_ROUTER_ADDRESS } from '@uniswap/universal-router-sdk'
import { useWeb3React } from '@web3-react/core'

import { BaseVariant, FeatureFlag, useBaseFlag } from '../index'

export function useLandingRedirectFlag(): BaseVariant {
  return useBaseFlag(FeatureFlag.LandingRedirect)
}

export function useLandingRedirectEnabled(): boolean {
  const flagEnabled = useLandingRedirectFlag() === BaseVariant.Enabled
  const { chainId } = useWeb3React()
  try {
    // Detect if the Universal Router is not yet deployed to chainId.
    // This is necessary so that we can fallback correctly on chains without a Universal Router deployment.
    // It will be removed once Universal Router is deployed on all supported chains.
    chainId && UNIVERSAL_ROUTER_ADDRESS(chainId)
    return flagEnabled
  } catch {
    return false
  }
}

export { BaseVariant as LandingRedirectVariant }
