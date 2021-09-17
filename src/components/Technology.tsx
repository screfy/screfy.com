import { ReactChild } from 'react'
import Heading from './Heading'

export interface TechnologyProps {
  name: string
  description: string
  icon: ReactChild
  color: string
}

export default function Technology({ name, description, icon, color }: TechnologyProps): JSX.Element {
  return (
    <div className="h-[120px] lg:h-[100px] w-full flex items-center p-4 space-x-4 border border-secondary hover:bg-secondary rounded-lg transition-colors">
      <div
        className="h-[64px] w-[64px] flex flex-shrink-0 items-center justify-center rounded-xl"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div className="flex flex-col">
        <Heading as="h3" text={name} />
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}
