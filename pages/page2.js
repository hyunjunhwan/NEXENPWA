import React from 'react'
import Link from 'next/link'
function Page2() {
  return (
    <div>
        page2
        <Link href={`/`}>
            <button>돌아가기</button>
        </Link>
    </div>
  )
}

export default Page2