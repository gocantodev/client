interface Item {
  label: string,
  slug: string,
}

const Menu:Array<Item> = [
  {
    label: 'Experience',
    slug: 'experience',
  },
  {
    label: 'Skills',
    slug: 'skills',
  },
  {
    label: 'Open Source',
    slug: 'open-source',
  },
  {
    label: 'Contact Me',
    slug: 'contact-me',
  },
]

export default Menu
