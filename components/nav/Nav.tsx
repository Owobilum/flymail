import { FC, DetailedHTMLProps, HTMLAttributes } from 'react'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const Nav: FC<Props> = (props) => {
  const renderedLinks = links.map(({ name }) => (
    <li
      key={name}
      className="cursor-pointer hover:text-primary text-center lg:text-start"
    >
      {name}
    </li>
  ))

  return (
    <nav {...props}>
      <ul className="flex flex-col lg:flex-row  gap-8 xl:gap-10 text-lg font-lato text-offWhite capitalize py-12 lg:py-0">
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
