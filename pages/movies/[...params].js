// import { useRouter } from "next/router"

import Seo from "../../components/Seo"

export default function Detail({params:[title, id]=[]}) {
  // const {query:{id}} = useRouter();
  // const {query:{id, title}} = useRouter();
  // const {query:{params:[title, id]}} = useRouter(); // 구조분해할당 return.query.param.title | return.query.param.id
/*   const router = useRouter();
  const [title, id] = router.query.params || []; */
  // const {query:{params:[title, id] = []}} = useRouter(); // 대부분의 컴포넌트가 Server에서 prerender 되기 때문에 useRouter에 대한 js코드가 아직 로드되지 않을때 기본배열로 설정해줘야한다.
  console.log(title)
  return <div>
    <Seo title={title}/>
    <h4>{title||"Loading..."}</h4>
  </div>
}

export function getServerSideProps({params:{params}}) {
  return {
    props : {params}
  }

}