import { FC, DetailedHTMLProps, HTMLAttributes } from 'react'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const Nav: FC<Props> = (props) => {
  const renderedLinks = links.map(({ name }) => (
    <li
      key={name}
      className="cursor-pointer  text-center hover:text-primary lg:text-start"
    >
      {name}
    </li>
  ))

  return (
    <nav {...props}>
      <ul className="flex flex-col gap-8  py-12 font-lato text-lg capitalize text-offWhite lg:flex-row lg:py-0 xl:gap-10">
        {renderedLinks}
      </ul>
    </nav>
  )
}

export default Nav

const links = [
  { name: 'product' },
  { name: 'pricing' },
  { name: 'customer stories' },
  { name: 'resources' },
  { name: 'contact' },
]
