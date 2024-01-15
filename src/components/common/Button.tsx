import React from 'react'
import styled from 'styled-components'

interface Props {
  type: 'button' | 'submit'
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
}

export default function Button({ type, children, onClick, disabled = false }: Props) {
  const handleClick = () => {
    if (disabled) return

    onClick()
  }

  return (
    <StyledButton type={type} onClick={handleClick} disabled={disabled}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 47.92px;
  font-size: 18px;
  border: none;
  color: #ffffff;
  background: ${(props) => (props.disabled ? '#c1c1c1' : '#000')};
  cursor: pointer;
`
