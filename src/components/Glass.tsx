import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement>

/** Glass surface whose highlight follows the pointer. */
export const Glass: React.FC<Props> = ({ className = '', onPointerMove, ...rest }) => {
  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
    onPointerMove?.(e)
  }
  return <div className={`glass ${className}`} onPointerMove={move} {...rest} />
}
