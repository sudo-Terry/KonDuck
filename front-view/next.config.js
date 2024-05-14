module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/api/:path*", // Rails 서버의 API 엔드포인트로 변경 필요
      },
    ];
  },
};
