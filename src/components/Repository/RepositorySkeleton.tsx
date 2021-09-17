import { ChevronDown } from 'react-feather'

export default function RepositorySkeleton(): JSX.Element {
  return (
    <div className="animate-pulse bg-secondary h-[42px] w-full rounded-lg">
      <div className="h-full flex items-center justify-between px-4 py-2">
        <div className="h-[14px] w-20 bg-[#5e5e5e] rounded"></div>
        <ChevronDown className="text-[#5e5e5e]" size="18" />
      </div>
    </div>
  )
}
