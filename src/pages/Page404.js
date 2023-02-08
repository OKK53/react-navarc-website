import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function Page404() {
  return (
    <div>
        <Helmet>
          <title>Sayfa bulunamadi - Navarc</title>
        </Helmet>
        <h1>sayfa bulunamadı</h1>
        <Link to="/">Anasayfaya dön</Link>
    </div>
  )
}

export default Page404