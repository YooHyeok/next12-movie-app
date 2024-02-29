import { useRouter } from "next/router"

export default function Detail() {
  const {query:{id}} = useRouter();
  console.log(id)
  return "asdasdasdasd";
}