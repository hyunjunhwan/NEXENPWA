import React from 'react'
import Link from 'next/link'
function Page1() {
  return (
    <div>
        page1
        <Link href={`/`}>
            <button>돌아가기</button>
        </Link>
    </div>
  )
}

export default Page1