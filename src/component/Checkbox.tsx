import { useEffect, useState } from "react"

export type Props = {
  type: string
  checked: boolean
}

export const Checkbox = ({ type, checked }: Props) => {
  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    if (isChecked !== checked) {
      setIsChecked(checked)
    }
  }, [checked])

  if (type !== "checkbox") return null

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(checked)}
    />
  )
}
