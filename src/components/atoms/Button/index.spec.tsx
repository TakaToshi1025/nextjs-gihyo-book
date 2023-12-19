import { render, screen, fireEvent, RenderResult } from '@testing-library/react'
import Button from '.'
import { CustomStyleSheetManager } from '@/themes/CustomStyleSheetManager'

describe('Button', () => {
  let renderResult: RenderResult
  let handleClick: jest.Mock

  beforeEach(() => {
    handleClick = jest.fn()
    renderResult = render(
      <CustomStyleSheetManager>
        <Button variant="primary" onClick={handleClick}>
          Button
        </Button>
      </CustomStyleSheetManager>,
    )
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('ボタンを押した時にonClickが呼ばれる', () => {
    fireEvent.click(screen.getByText('Button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
