import Link from 'next/link'
import styled from 'styled-components'

const Nav = () => (
  <nav>
    <Links>
      <div>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </div>
      <div >
        <Link prefetch href="/fa/about">
          <a>About</a>
        </Link>
      </div>
    </Links>
  </nav>
)
const Links = styled.div`
  div {
    display: inline-flex;
    a {
      color: green;
    }
  }
`
export default Nav
