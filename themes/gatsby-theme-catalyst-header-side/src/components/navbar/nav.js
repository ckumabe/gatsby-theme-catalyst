/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import NavLinks from "./nav-links"
import NavIcons from "./nav-icons"

const NavLayout = () => {
  const [isNavOpen] = useContext(NavContext)

  return (
    <nav
      sx={{
        mt: 2,
        gridColumn: ["1 / -1", null, "1 / 1", null, null],
        gridRow: "2 / 3",
        display: isNavOpen ? "flex" : ["none", null, "flex", null, null],
        flexDirection: "column",
        alignItems: "center",
        variant: "variant.nav",
      }}
      role="navigation"
      aria-label="main-navigation"
    >
      <NavIcons />
      <NavLinks />
    </nav>
  )
}

export default NavLayout
