/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/naver", /* 사용자의 이동 경로 */
        destination: 'https://www.naver.com', /* redirect될 경로 */
        permanent: false, /* redirection이 영구적인지 여부에 따라 브라우저 검색엔진 정보기억 여부결정 */
      },
      {
        source: "/old-blog/:path*", /* 예전 블로그 */
        destination: '/new-blog/:path*', /* 블로그 이전 주소 */
        permanent: false,
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      },
    ]
  }
}

module.exports = nextConfig
