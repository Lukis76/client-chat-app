import { SVGProps } from 'react'

export interface IconComponent extends SVGProps<SVGSVGElement> {
  size?: number
  fg?: string
  bg?: string
  className?: string
}
