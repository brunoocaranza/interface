import { Trans } from '@lingui/macro'
import { ButtonPrimary } from 'components/Button'
import { AutoColumn } from 'components/Column'
import { RowBetween } from 'components/Row'
import { AlertTriangle } from 'react-feather'
import { Text } from 'rebass'
import styled from 'styled-components/macro'
import { CloseIcon, ThemedText } from 'theme'

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
`

const Container = styled.div`
  width: 100%;
  padding: 32px 32px;
  display: flex;
  flex-flow: column;
  align-items: center;
`

const LogoContainer = styled.div`
  display: flex;
  gap: 16px;
`

const ShortColumn = styled(AutoColumn)`
  margin-top: 10px;
`

const InfoText = styled(Text)`
  padding: 0 12px 0 12px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`

const StyledButton = styled(ButtonPrimary)`
  margin-top: 24px;
  width: 100%;
  font-weight: 600;
`

const WarningIcon = styled(AlertTriangle)`
  width: 76px;
  height: 76px;
  margin-top: 4px;
  margin-bottom: 28px;
  stroke-width: 1px;
  margin-right: 4px;
  color: ${({ theme }) => theme.accentCritical};
`

const onReconnect = () => window.location.reload()

const header = 'Wallet disconnected'
const description = 'A Metamask error caused your wallet to disconnect. Reload the page to reconnect.'

export default function MetamaskConnectionWarning() {
  return (
    <Wrapper>
      <RowBetween style={{ padding: '1rem' }}>
        <div />
        <CloseIcon onClick={() => console.log('closed')} />
      </RowBetween>
      <Container>
        <AutoColumn>
          <LogoContainer>
            <WarningIcon />
          </LogoContainer>
        </AutoColumn>
        <ShortColumn>
          <InfoText>
            <ThemedText.HeadlineSmall marginBottom="8px">{header}</ThemedText.HeadlineSmall>
            <ThemedText.BodySmall>{description}</ThemedText.BodySmall>
          </InfoText>
        </ShortColumn>
        <StyledButton onClick={onReconnect}>
          <Trans>Reload</Trans>
        </StyledButton>
      </Container>
    </Wrapper>
  )
}
