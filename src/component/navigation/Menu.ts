interface Item {
    label: string
    slug: string
}

export const CONTACT_ME_SLUG = "contact-me"

export const Menu: Array<Item> = [
    {
        label: "Experience",
        slug: "experience",
    },
    {
        label: "Skills",
        slug: "skills",
    },
    {
        label: "Open Source",
        slug: "open-source",
    },
    {
        label: "Contact Me",
        slug: CONTACT_ME_SLUG,
    },
]
