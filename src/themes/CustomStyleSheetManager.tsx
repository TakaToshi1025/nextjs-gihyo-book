import isPropValid from '@emotion/is-prop-valid'
import { PropsWithChildren } from 'react'
import { ShouldForwardProp, StyleSheetManager } from 'styled-components'

const shouldForwardProp: ShouldForwardProp<'web'> = (propName, target) => {
  if (typeof target === 'string') {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName)
  }
  // For other elements, forward all props
  return true
}

export const CustomStyleSheetManager = ({ children }: PropsWithChildren) => (
  // enableVendorPrefixes: vendor prefixが省略されないようにする（v6ではvendor prefixがデフォルトで省略される）
  // shouldForwardProp: styled componentのpropsが有効なHTML要素である場合のみ、DOM要素にフォワードされるようにする
  <StyleSheetManager enableVendorPrefixes shouldForwardProp={shouldForwardProp}>
    {children}
  </StyleSheetManager>
)
