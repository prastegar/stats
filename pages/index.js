import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

export default () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className="hero">
      <h1 className="title">Statistics</h1>
    </div>
    <ul>
      <li>add graphical stats</li>
      <li>قابلیت اعتبار سنجی آمار</li>
      <li>دسته بندی کردن آمارها open</li>
      <li></li>
    </ul>
  </div>
)
